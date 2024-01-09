import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "../MyPosts";
import StoreContext from "../../../../StoreContext";




function MyPostsContainer () {
   
    return (
        <StoreContext.Consumer> 
            {
            (store) => {
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
        postsData={store.getState().postsData}
        newPostText={store.getState().newPostText} //можно вынести props.store.getState(), в let state = props.store.getState(), и будет state.newPosrText 

    
    />)
            }
        }
              
        </StoreContext.Consumer>

  
    )
}

export default MyPostsContainer;