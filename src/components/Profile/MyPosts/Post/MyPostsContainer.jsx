import React from "react";

import MyPosts from "../MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profileReducer";
import { connect } from "react-redux";





let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text)=> {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: ()=> {
            dispatch(addPostActionCreator());
        }

    }
}
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;