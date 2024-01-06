import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo";

function Profile (props) {
    return (
        <div >
        
       <ProfileInfo />
        <MyPosts postsData={props.postsData} />
       
       
        </div>
    )
}

export default Profile;