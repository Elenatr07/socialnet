import React, { useEffect, useState } from 'react'

export default function ProfileStatusFunc(props) {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState("enter your status New")

    useEffect(()=> {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = ()=> {
        setEditMode(true)
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
        <div>
            <span onDoubleClick={activateEditMode} >{props.status || "enter your status"}</span>
        </div>}
   {editMode &&
        <div>
            <input onChange={onStatusChange}  autoFocus={true} onBlur={deactivateEditMode} value={status}/>
        </div>}
    
   

</div>
  )
}
