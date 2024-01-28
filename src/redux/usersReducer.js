const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CORRENT_PAGE = 'SET_CORRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    users: [],
    pageSize: 10, //количество выводимых страниц
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true

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
                users: action.users
            }
        case SET_CORRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching

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
export const setCurrentPageCreator = (currentPage) => {
    return {
        type: SET_CORRENT_PAGE, currentPage
    }
}

export const setTotalUsersCountCreator = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}

export const setIsFetchingCreator = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}