import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import { followActionCreator, setCurrentPageCreator, setIsFetchingCreator, setTotalUsersCount, setTotalUsersCountCreator, setUsersCreator, unfollowActionCreator } from "../../redux/usersReducer";
import UsersClass from "./UsersClass";
import Preloader from "../Preloader/Preloader";
import { getUsers } from "../../api/api";


class UsersAPIComponent extends React.Component {
  
     componentDidMount () {
        this.props.toggleIsFetching(true)

        getUsers(this.props.currentPage, this.props.pageSize).then(data => { //data приходит из res в api.js
            this.props.toggleIsFetching(false)
             this.props.setUsers(data.items)
             this.props.setTotalUsersCount(data.totalCount)
           });
    }
    onPageChanged = (pageNumber) => {
     this.props.setCurrentPage(pageNumber);
     this.props.toggleIsFetching(true)
     getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
         this.props.setUsers(data.items)
       });
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
        isFetching: state.usersPage.isFetching
    }
}

{/* если убрать mapDispatchToProps и поместить его сразу в connect
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

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (UsersAPIComponent);*/}

const UsersContainer = connect(mapStateToProps, {
    follow: followActionCreator,
    unfollow: unfollowActionCreator,
    setUsers: setUsersCreator,
    setCurrentPage: setCurrentPageCreator,
    setTotalUsersCount: setTotalUsersCountCreator,
    toggleIsFetching: setIsFetchingCreator
}) (UsersAPIComponent);
export default UsersContainer;