import { createSelector } from "reselect";

const getUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getcurrentPaget = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true);
}
//reselect для сложных селектов, наример с фильтрацией или математ.вычислениями
export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(user => true)
})  