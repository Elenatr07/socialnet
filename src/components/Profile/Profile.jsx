import React from "react";

import ProfileInfo from "./MyPosts/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";



function Profile (props) {
    return (
        <div >
        
       <ProfileInfo profile={props.profile}
       status={props.status} 
       updateStatus={props.updateStatus}/>
        <MyPostsContainer
       // store = {props.store}
    
        
         />
       
       
        </div>
    )
}

export default Profile;

