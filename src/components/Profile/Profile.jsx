import React from "react";

import ProfileInfo from "./MyPosts/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";



function Profile (props) {
    return (
        <div >
        
       <ProfileInfo />
        <MyPostsContainer
       // store = {props.store}
    
        
         />
       
       
        </div>
    )
}

export default Profile;