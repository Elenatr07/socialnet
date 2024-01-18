import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import { followActionCreator, setCurrentPageCreator, setTotalUsersCount, setTotalUsersCountCreator, setUsersCreator, unfollowActionCreator } from "../../redux/usersReducer";
import UsersClass from "./UsersClass";

class UsersAPIComponent extends React.Component {
  
     componentDidMount () {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPag}&count=${this.props.pageSize}`)
         .then(res => {
             this.props.setUsers(res.data.items)
             this.props.setTotalUsersCount(res.data.totalCount)
           });
    }
    onPageChanged = (pageNumber) => {
     this.props.setCurrentPage(pageNumber);
     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
     .then(res => {
         this.props.setUsers(res.data.items)
       });
    }
      
     render() {
      
       return <UsersClass 
       onPageChanged={this.onPageChanged} 
       totalUsersCount = {this.props.totalUsersCount}
       pageSize = {this.props.pageSize}
       currentPage = {this.props.currentPage}
       users = {this.props.users}
       unfollow = {this.props.unfollow}
       follow = {this.props.follow}
 
       /> 
       
     }
 }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNamber) => {
            dispatch(setCurrentPageCreator(pageNamber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountCreator(totalCount))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (UsersAPIComponent);

export default UsersContainer;