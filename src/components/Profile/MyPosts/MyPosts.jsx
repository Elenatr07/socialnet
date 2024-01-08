import React from "react";
import Post from "./Post/Post";
import style from './MyPosts.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";




function MyPosts (props) {


let postsElements = props.postsData.map ((obj) => {
    return(
        <Post key={obj.id} message={obj.post} likesCount={obj.likesCount} />
    )
})

let newPostElement = React.createRef(); // создание ссылки на объект

let addPost = () => {
    props.dispatch(addPostActionCreator());
   
}

let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text)); //newPost это название переменной в state которая создается и изменяется
    
}

    return (
        <div>
           <h2 className={style.title}>My posts</h2> 
           <div>
            <textarea 
                ref={newPostElement} 
                value={props.newPostText} 
                onChange={onPostChange} />
           </div>
           <div className={style.button_block}>
            <button onClick={addPost}>Add post</button>
           </div>
            
            
            <div className={style.new_posts}>New posts</div>
                {postsElements}
            </div>
  
    )
}

export default MyPosts;