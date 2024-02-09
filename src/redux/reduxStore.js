import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { sidebarReducer } from './sidebarReducer';
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import {thunk as thunkMiddleware} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer';
import { compose } from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer, //для подключения форм
    app: appReducer
}
)
//для работы redux devtools в браузере

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)
  ));
/* код без подключения redux devtools для браузера
export let store = createStore(reducers, applyMiddleware(thunkMiddleware)); //applyMiddleware для подключения thunk в reduser*/
window.__store__ = store;
export default store;