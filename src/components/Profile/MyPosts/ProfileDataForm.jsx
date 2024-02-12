import React from "react";
import { reduxForm } from "redux-form";
import { Input, Textarea, createField } from "../../FormControls/FormControls";
import style from "./ProfileInfo.module.css";


 const ProfileDataForm =(props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
          <button  >save</button>
          {props.error && <div className={style.formSummaryError }>{props.error}</div>}
        </div>
        <div>
            <p>Full Name: {createField("Full Name", "fullName", [], Input)}</p> 
        </div>
        <div>
        <p>Looking for a job:{createField('', 'lookingForAJob', [], Input, {type: "checkbox"})}</p> 
        </div>
        <div> <p>My professional skills: {createField("Skills", 'lookingForAJobDescription', [], Textarea )}</p> 
            </div>
        <div>
        <p > About me:{createField("About me", "aboutMe", [], Textarea)}</p>
        </div>
        <div>
        <p className={style.contacts}>Contacts</p> 
        <div className={style.descriptionEdit}>
        
             {Object.keys(props.profile.contacts || {}).map(key => {
        
              return <div key={key}>
                <p>{key}: {createField(key, "contacts." + key, [], Input)}</p>
                 </div>
             })}
        </div>
        </div>
 
      </form>
    )
  
  }

  const ProfileDataReduxForm = reduxForm({
    // a unique name for the form
    form: 'profileData'
  })(ProfileDataForm)
  export default ProfileDataReduxForm;