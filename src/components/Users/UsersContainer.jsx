import React from "react";
import { connect } from "react-redux";


import { followActionCreator, followThunk, getUsersThunkCreator, setCurrentPageCreator, setIsFetchingCreator, setIsFollowingProgressCreator, setTotalUsersCount, setTotalUsersCountCreator, setUsersCreator, unFollowThunk, unfollowActionCreator } from "../../redux/usersReducer";
import UsersClass from "./UsersClass";
import Preloader from "../Preloader/Preloader";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import { compose } from "redux";


class UsersAPIComponent extends React.Component {
  
     componentDidMount () {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
      
      /*  перенос всего в thunk в userReduser и запуск getUsersThunk
      this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => { //data приходит из res в api.js
            this.props.toggleIsFetching(false)
             this.props.setUsers(data.items)
             this.props.setTotalUsersCount(data.totalCount)
           });*/
    }
    onPageChanged = (currentPage) => {
        this.props.getUsersThunk(currentPage, this.props.pageSize);

    /*  перенос всего в thunk в userReduser и запуск getUsersThunk
      this.props.setCurrentPage(pageNumber);
     this.props.toggleIsFetching(true)
     usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
         this.props.setUsers(data.items)
       });*/
    }
      
     render() {
        return <>
        {this.props.isFetching ?
        
            <Preloader /> : 

        <UsersClass 
       onPageChanged={this.onPageChanged} 
       totalUsersCount = {this.props.totalUsersCount}
       pageSize = {this.props.pageSize}
       currentPage = {this.props.currentPage}
       users = {this.props.users}
       unfollow = {this.props.unfollow}
       follow = {this.props.follow}
       followingInProgress  = {this.props.followingInProgress}
       toggleFollowingInProgress={this.props.toggleFollowingInProgress}
       followThunk = {this.props.followThunk}
       unFollowThunk = {this.props.unFollowThunk}

       
 
       />
       }
       </>
       
       
     }
 }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
       
    }
}

/* если убрать mapDispatchToProps и поместить его сразу в connect
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
        },
        setCurrentPage: (pageNamber) => {
            dispatch(setCurrentPageCreator(pageNamber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountCreator(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setIsFetchingCreator(isFetching))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (UsersAPIComponent);*/

//hoc перенос в compose
//let withRedirect = withAuthRedirect(UsersAPIComponent)
/*чтобы убрать redirect на /login надо закоментировать withRedirect и 
компоненту UsersAPIComponent перенести в UsersContainer взамен withRedirect
*/
//перенос в compose
/*const UsersContainer = connect(mapStateToProps, {
    follow: followActionCreator,
    unfollow: unfollowActionCreator,
    setUsers: setUsersCreator,
    setCurrentPage: setCurrentPageCreator,
    setTotalUsersCount: setTotalUsersCountCreator,
    toggleIsFetching: setIsFetchingCreator,
    toggleFollowingInProgress: setIsFollowingProgressCreator,
    getUsersThunk: getUsersThunkCreator,
    followThunk: followThunk,
    unFollowThunk: unFollowThunk
}) (withRedirect);*/

//в compose чтобы убрать redirect на  /login надо закоментировать withAuthRedirect

const UsersContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, {
    follow: followActionCreator,
    unfollow: unfollowActionCreator,
    setUsers: setUsersCreator,
    setCurrentPage: setCurrentPageCreator,
    setTotalUsersCount: setTotalUsersCountCreator,
    toggleIsFetching: setIsFetchingCreator,
    toggleFollowingInProgress: setIsFollowingProgressCreator,
    getUsersThunk: getUsersThunkCreator,
    followThunk: followThunk,
    unFollowThunk: unFollowThunk}))(UsersAPIComponent)
    
export default UsersContainer;



