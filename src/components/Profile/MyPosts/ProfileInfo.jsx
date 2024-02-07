import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from '../../Preloader/Preloader';

import ProfileStatusFunc from './ProfileStatusFunc';

export default function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    
    <div>
      <div>
        <img className={style.main_content_img} src='https://static.tildacdn.com/tild3031-6564-4332-a464-643231303036/39.jpg' alt=''></img>
      </div>
      
      
   {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/} 
   <ProfileStatusFunc status={props.status} updateStatus={props.updateStatus} />
    <div className={style.ava}>
    <img className={style.content_logo} src={props.profile.photos.small} alt=''></img>

    <div className={style.description}>
        <h3>{props.profile.fullName}</h3>
        <p>{props.profile.contacts.facebook}</p>
        <p>{props.profile.contacts.website}</p>
        <p>{props.profile.contacts.vk}</p>
        <p>{props.profile.contacts.twitter}</p>
        <p>{props.profile.contacts.youtube}</p>
        <p>{props.profile.contacts.github}</p>
        <p>{props.profile.contacts.mainLink}</p>
        <p>City</p>
        <p>{props.profile.aboutMe}</p>
        <a src="#">Web Site</a>
    </div>
</div>
</div>
  )
}


