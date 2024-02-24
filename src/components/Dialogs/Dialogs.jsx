import React, { useEffect, useState  } from 'react'
import style from "./Dialogs.module.css"

import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { NavLink} from 'react-router-dom'
import {Field, reduxForm, reset } from "redux-form"
import { Textarea } from '../FormControls/FormControls'
import { maxLengthCreator, requiredField } from '../../utils/validators/validator'
import MessageBlock from './MessageBlock'
import Paginator from '../FormControls/Paginator/Paginator'






export default function Dialogs(props) {

let friendId = props.router.params.friendId;
let owner = props.owner
let isUser = !friendId ? owner : friendId
let onPageChanged = (currentPage) => {
    props.getListMessages(friendId, currentPage, props.pageSize)}

useEffect(()=> {
    
    props.getChating();
}, [])

useEffect(()=> {
    props.getListMessages(isUser, props.currentPage, props.pageSize)
}, [props.currentPage])




let dialogsElements = props.dialogsData.map((obj) => {
   
      
    return(
      
        <NavLink className={navData=> navData.isActive ? style.active : style.dialog} 
        to={"/dialogs/"+ obj.id} onClick={()=> {props.getListMessages(obj.id)}}>
            <Dialog key={obj.id} name={obj.userName} id={obj.id} newMessages={obj.newMessagesCount} 
            photos={obj.photos} lastdialog = {obj.lastDialogActivityDate} lastActivity={obj.lastUserActivityDate}
              />

        </NavLink>
       
    )
   
    
})



let addNewMessege = (values) => {
 
   props.sendMessage(isUser, values.body)
  
}







//alert (props.isAuth)
//перенесено в AuthRedirectComponent в DialogsContainer
//if (props.isAuth === false) return <Navigate to="/login"></ >
  return (
    <div className={style.dialogs}> 
  
        <div className={style.dialog_items}>
            <h2>Dialogs</h2>
         
               
            {dialogsElements}
         

        </div>
    
        <div className={style.messages}> 
        <MessageBlock friendId={isUser} dialogs={props.dialogs} owner={owner} 
        delMessage={props.delMessage}  />
        <Paginator   currentPage={props.currentPage} 
                onPageChanged={onPageChanged} 
                totalItemsCount={props.totalMessagesCount}
                pageSize={props.pageSize} />
            
            {friendId  ? <AddMessageFormRedux onSubmit={addNewMessege}  />: <div>select a dialog</div>}

          
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
            <Field component={Textarea} name="body"  placeholder='Enter your message'
            validate={[requiredField, maxLength50]}/>
      
        </div>
        <div className={style.button_block}>
            <button className={style.send_message} >Send</button>
        </div>
    </form>
    )
}


const afterSubmit = (result, dispatch) =>
  dispatch(reset('dialogAddMessageForm')); //очитска полей формы после отправки

const AddMessageFormRedux =  reduxForm({form: 'dialogAddMessageForm',  
onSubmitSuccess: afterSubmit, }) (AddMessageForm)


