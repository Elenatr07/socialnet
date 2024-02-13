import React, { useEffect, useState } from 'react';
import style from './ProfileInfo.module.css'

export default function ProfileStatusFunc(props) {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState("enter your status New")

    useEffect(()=> {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = ()=> {
        if(props.isOwner) {
         setEditMode(true)   
        }
        
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
  return (
    <div>
   
    {!editMode &&
        <div className={style.statusBlock}>
            <span onDoubleClick={activateEditMode} >{props.status || "The status is not specified"}</span>
        </div>}
   {editMode &&
        <div>
            <input onChange={onStatusChange}  autoFocus={true} onBlur={deactivateEditMode} value={status}/>
        </div>}
    
   

</div>
  )
}

