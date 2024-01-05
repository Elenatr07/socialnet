import React from "react";
import Post from "./Post/Post";

function MyPosts () {
    return (
        <div>
           <h2>My posts</h2> 
            <textarea></textarea>
            <button>Add post</button>
            <div>New posts</div>

            <Post message="Hi, how are you?" likesCount='0' />
            <Post message="Hello" likesCount="15"/>
        </div>
  
    )
}

export default MyPosts;