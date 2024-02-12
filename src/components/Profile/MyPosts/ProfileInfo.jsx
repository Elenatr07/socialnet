import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";

import ProfileStatusFunc from "./ProfileStatusFunc";

import ProfileDataReduxForm from "./ProfileDataForm";
let url = "https://buzookod.ru/media/2816616767_vubrbeJ.jpg";

export default function ProfileInfo(props) {

let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then( //надо дождаться с сервера ответа на наличие ошибки и только потом закрывать режим редактирования
    (res) => {
      if(!res)  return setEditMode(false) //saveProfileThunk делаю return response.data.resultCode который возвращает инфу о налчии/отсутствии ошибки
    }
   );
  
   
  }
  return (
    <div>
      <div>
        <img
          className={style.main_content_img}
          src="https://static.tildacdn.com/tild3031-6564-4332-a464-643231303036/39.jpg"
          alt=""
        ></img>
      </div>

      {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
      <ProfileStatusFunc
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <div >
        <div className={style.ava}>
          <img
            className={style.content_logo}
            src={props.profile.photos.small || url} alt=""></img>
          
        </div>
        <div>
        {props.isOwner && (
          <input
            className={style.profileInput}
            type={"file"}
            onChange={onMainPhotoSelected}
          />
        )}
        </div>
         
      </div>
      {editMode ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}  /> 
      : <ProfileData profile={props.profile} isOwner={props.isOwner}
      toEditMode={() => {setEditMode(true)}}/> }
          
    </div>
  );
}


const ProfileData = ({profile, isOwner, toEditMode}) => {

  return (<div>
    <h3 className={style.fullName}>{profile.fullName}</h3>
    <div>
      {isOwner && <button onClick={toEditMode}>edit</button>}
    </div>
      <p className={style.contacts}>Contacts</p> 
        <div className={style.description}>
        
             {Object.keys(profile.contacts || {}).map(key => {
        
              return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
             })}
        </div>
        <div className={style.aboutMe}>aboutMe:
          <p > {profile.aboutMe}</p>
          <p>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</p>
              </div>
              {profile.lookingForAJob &&
        <div> <p>My professional skills: {profile.lookingForAJobDescription}</p>
            </div>}
  </div>
  
  )
}

const Contacts = ({contactTitle, contactValue}) => {
  return (<div className={style.contactItem}> 
              <div>{contactTitle}: </div>
                    <div className={style.contactValue}>{contactValue}</div> 
              
          </div>)
}

