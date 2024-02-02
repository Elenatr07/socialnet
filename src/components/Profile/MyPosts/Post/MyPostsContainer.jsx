import React from "react";

import MyPosts from "../MyPosts";
import { addPostActionCreator } from "../../../../redux/profileReducer";
import { connect } from "react-redux";





let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
     
        addPost: (newPostText)=> { //newPostText название name из Field из MyPosts
            dispatch(addPostActionCreator(newPostText));
        }

    }
}
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;