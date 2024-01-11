import React from "react";

import MyPosts from "../MyPosts";
import StoreContext from "../../../../StoreContext";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profileReducer";




function MyPostsContainer () {
   
    return (
        <StoreContext.Consumer> 
            {(store) => {
                let addPost = () => {
                store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text)); //newPost это название переменной в state которая создается и изменяется
    
                }
     return (
            <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        postsData={store.getState().profilePage.postsData}
        newPostText={store.getState().profilePage.newPostText} //можно вынести props.store.getState(), в let state = props.store.getState(), и будет state.newPosrText 

    
    />)
            }
        }
              
        </StoreContext.Consumer>

  
    )
}

export default MyPostsContainer;