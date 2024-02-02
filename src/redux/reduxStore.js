import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { sidebarReducer } from './sidebarReducer';
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import {thunk as thunkMiddleware} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer, //для подключения форм
}
)

export let store = createStore(reducers, applyMiddleware(thunkMiddleware)); //applyMiddleware для подключения thunk в reduser
window.store = store;
