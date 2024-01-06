import React from 'react';
import style from './ProfileInfo.module.css'

export default function ProfileInfo() {
  return (
    
    <div>
        <div>
             <img className={style.main_content_img} src='https://static.tildacdn.com/tild3031-6564-4332-a464-643231303036/39.jpg'></img>
        </div>
    <div className={style.ava}>
    <img className={style.content_logo} src='https://w7.pngwing.com/pngs/73/738/png-transparent-flower-graphy-flower-purple-violet-lilac.png'></img>
    <div className={style.description}>
        <h3>User name</h3>
        <p>Date of Birth</p>
        <p>City</p>
        <p>Education</p>
        <a src="#">Web Site</a>
    </div>
</div>
</div>
  )
}
