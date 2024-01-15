import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followActionCreator, setUsersCreator, unfollowActionCreator } from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps= (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;