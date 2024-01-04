import React from "react";

function Profile () {
    return (
        <div className='main_content'>
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
        <div>
              <h3>Mi posts</h3>
              <div>New posts</div>
         </div>
         <div>
             post 1
         </div>
         <div>
             post 2
         </div>
       
        </div>
    )
}

export default Profile;