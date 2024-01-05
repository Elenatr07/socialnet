import React from "react";
import MyPosts from "./MyPosts/MyPosts";

function Profile () {
    return (
        <div >
        <div>
             <img className='main_content_img' src='https://static.tildacdn.com/tild3031-6564-4332-a464-643231303036/39.jpg'></img>
        </div>
        <h2>Main content</h2> 
        <div className='ava'>
             <img className='content_logo' src='https://w7.pngwing.com/pngs/73/738/png-transparent-flower-graphy-flower-purple-violet-lilac.png'></img>
             <div className='description'>
                 <h3>User name</h3>
                 <p>Date of Birth</p>
                 <p>City</p>
                 <p>Education</p>
                 <a src="#">Web Site</a>
             </div>
        </div>
        <MyPosts />
       
       
        </div>
    )
}

export default Profile;