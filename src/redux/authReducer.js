const SET_USER_DATA = 'SET_USER_DATA';


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
            isAuth: true    
        }

        default:
            return state;
   }
   
}

export const setAuthUserDataCreator = (id, email, login) => {
    return {
        type: SET_USER_DATA, data: {id, email, login}
    }
}

