import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "../MyPosts";




function MyPostsContainer (props) {

let addPost = () => {
    props.store.dispatch(addPostActionCreator());
   
}

let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text)); //newPost это название переменной в state которая создается и изменяется
    
}

    return (
  <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        postsData={props.store.getState().postsData}
        newPostText={props.store.getState().newPostText} //можно вынести props.store.getState(), в let state = props.store.getState(), и будет state.newPosrText 

    
    />
  
    )
}

export default MyPostsContainer;