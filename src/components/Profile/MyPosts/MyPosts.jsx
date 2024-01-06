import React from "react";
import Post from "./Post/Post";
import style from './MyPosts.module.css'

function MyPosts (props) {


let postsElements = props.postsData.map ((obj) => {
    return(
        <Post key={obj.id} message={obj.post} likesCount={obj.likesCount} />
    )
})

    return (
        <div>
           <h2 className={style.title}>My posts</h2> 
           <div>
            <textarea></textarea>
           </div>
           <div className={style.button_block}>
            <button>Add post</button>
           </div>
            
            
            <div className={style.new_posts}>New posts</div>
                {postsElements}
            </div>
  
    )
}

export default MyPosts;