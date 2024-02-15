
import { usersAPI } from './../api/api';
import { updateObjectInArray } from './../utils/validators/objectHelpers';


const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CORRENT_PAGE = 'users/SET_CORRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 10, //количество выводимых страниц
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}
export const usersReducer = (state=initialState, action) => {
   
    switch(action.type) {
        
        case FOLLOW:
            return {
                ...state, //создание копии state
                users: updateObjectInArray(state.users,'id', action.userId,  {followed: true})
                //updateObjectInArray создали для удаления дублирования кода указанного ниже в follow и unfollow
              /*  users: state.users.map(user => { //обход всего списка users и изменение folowed по id user из action
                    if (user.id === action.userId) {
                        return {...user, followed: true} //копирование user и изменение followed у тех у кого совпадает id
                    }
                    return user;
                })*/
            }
            
        case UNFOLLOW:
            return {
                ...state, //создание копии state
                users: updateObjectInArray(state.users, 'id', action.userId,  {followed: false})
              /*  users: state.users.map(user => { //обход всего списка users и изменение folowed по id user из action
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })*/
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
            followingInProgress: action.isFollowingInProgress 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
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

export const setIsFollowingProgressCreator = (isFollowingInProgress, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowingInProgress, userId
    }
}

//Thunk

export const getUsersThunkCreator = (currentPage, pageSize )  => {
  return  (dispatch) => {
   dispatch (setIsFetchingCreator(true));

    usersAPI.getUsers(currentPage, pageSize).then(data => { //data приходит из res в api.js
       dispatch (setCurrentPageCreator(currentPage))
       dispatch (setIsFetchingCreator(false));
       dispatch (setUsersCreator(data.items));
       dispatch(setTotalUsersCountCreator(data.totalCount))

       });
}
}

export const followThunk = (userId) => {
    return async (dispatch) => {
       dispatch (setIsFollowingProgressCreator(true, userId))
       let res = await usersAPI.follow(userId)
          
         //resultCode это инфа с сервера о том что авторизация состоялась, название и код зависит от настроек сервера
            if(res.data.resultCode ===0) {
            dispatch (followActionCreator(userId))
            }
            dispatch (setIsFollowingProgressCreator(false, userId))
            
    }
}

export const unFollowThunk = (userId) => {
    return async (dispatch) => {
       dispatch (setIsFollowingProgressCreator(true, userId))
       let res = await usersAPI.unfollow(userId)
           
         //resultCode это инфа с сервера о том что авторизация состоялась, название и код зависит от настроек сервера
            if(res.data.resultCode ===0) {
            dispatch (unfollowActionCreator(userId))
            }
            dispatch (setIsFollowingProgressCreator(false, userId))
        }
}