import React, { useEffect } from 'react'
import style from "./Dialogs.module.css"

import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { NavLink, Navigate } from 'react-router-dom'
import {Field, reduxForm} from "redux-form"
import { Textarea } from '../FormControls/FormControls'
import { maxLengthCreator, requiredField } from '../../utils/validators/validator'
import Paginator from '../FormControls/Paginator/Paginator'









export default function Dialogs(props) {




let dialogsElements = props.dialogsData.map((obj) => {


    return(
        <NavLink className={navData=> navData.isActive ? style.active : style.dialog} 
        to={"/dialogs/"+ obj.id} onClick={()=> {props.startChating(obj.id)}}>
            <Dialog key={obj.id} name={obj.userName} id={obj.id} newMessages={obj.newMessagesCount} 
            photos={obj.photos} lastdialog = {obj.lastDialogActivityDate} lastActivity={obj.lastUserActivityDate} /> 
        </NavLink>
       
    )
    
})
debugger
let messagesElemants = props.dialogs.map((obj) => {
  

    return (
       <div><Message key={obj.id} id={obj.id} message={obj.messages}  /></div>  
       
    )
})




let addNewMessege = (values) => {
    debugger
  //  alert(values.newMessageText) //указывается значение name из Field
   props.sendMessage(values.newMessageText)
}

//alert (props.isAuth)
//перенесено в AuthRedirectComponent в DialogsContainer
//if (props.isAuth === false) return <Navigate to="/login"></ >
  return (
    <div className={style.dialogs}> 
  
        <div className={style.dialog_items}>
            <h2>Dialogs</h2>
            <button onClick={()=> {props.getChating()}}>get users</button>
               
            {dialogsElements}
         

        </div>
    
        <div className={style.messages}> 
            <div>{messagesElemants}</div>
          <AddMessageFormRedux onSubmit={addNewMessege} />
        </div>
        <div>
            
        </div>
        
    </div>
  )
}
const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div className={style.block_textarea}>
            <Field component={Textarea} name="newMessageText"  placeholder='Enter your message'
            validate={[requiredField, maxLength50]}/>
      
        </div>
        <div className={style.button_block}>
            <button className={style.send_message} >Send</button>
        </div>
    </form>
    )
}

const AddMessageFormRedux =  reduxForm({form: 'dialogAddMessageForm' }) (AddMessageForm)

