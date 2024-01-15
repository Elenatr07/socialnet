const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [],

}
export const usersReducer = (state=initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state, //создание копии state
                users: state.users.map(user => { //обход всего списка users и изменение folowed по id user из action
                    if (user.id === action.userId) {
                        return {...user, followed: true} //копирование user и изменение followed у тех у кого совпадает id
                    }
                    return user;
                })
            }
            
        case UNFOLLOW:
            return {
                ...state, //создание копии state
                users: state.users.map(user => { //обход всего списка users и изменение folowed по id user из action
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default: 
        return state;
    }
}

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW, userId
    }
}
export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}

export const setUsersCreator = (users) => { //добавление users в state  приходящие с сервера
    return {
        type: SET_USERS, users
    }
}