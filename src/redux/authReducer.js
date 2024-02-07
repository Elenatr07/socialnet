import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}


export  const authReducer = (state = initialState, action) => {

   switch(action.type) {
    case SET_USER_DATA: 
        return {
            ...state,
            ...action.data, //... деструктуризации нужна так как в data будет сразу несколько значений (id, email, login...)
       
        }

        default:
            return state;
   }
   
}

export const setAuthUserDataCreator = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA, data: {id, email, login, isAuth}
    }
}
//thunk

export const getAuthUserDataThunk = () => async (dispatch) => {
   let res = await authAPI.meAuth();
//resultCoвe это инфа с сервера о том что авторизация состоялась, название и код зависит от настроек сервера
            if(res.data.resultCode ===0) {
                let {id, email, login} = res.data.data
                dispatch(setAuthUserDataCreator(id, email, login, true))
            }
        }

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    //тест на проверку без запроса на сервер
  //  let action = stopSubmit("email", {_error: "Email or password wrong"})
  //  dispatch(action)
   // return;
   let res = await authAPI.login(email, password, rememberMe)
             
           //resultCoвe это инфа с сервера о том что авторизация состоялась, название и код зависит от настроек сервера
            if(res.data.resultCode ===0) {
                dispatch(getAuthUserDataThunk())
            
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
                //тип messages и его значение если оно есть приходит с сервера, зависит от настроек сервера
                let action = stopSubmit("email", {_error: message}); 
                //stopSubmit встроенная в redux-form функция actioncreator, email это form из LoginReduxFom(reduxForm)
                //_error - все возвможные ошибки фиксируемые redux-form
                dispatch(action)
            }
        }

export const logoutThunk = () => async (dispatch) => {
   let res = await authAPI.logout()
           
           //resultCoвe это инфа с сервера о том что авторизация состоялась, название и код зависит от настроек сервера
            if(res.data.resultCode ===0) {
                dispatch(setAuthUserDataCreator(null, null, null, false))
            
            }
        }