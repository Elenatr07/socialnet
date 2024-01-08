import React from 'react'
import style from "./Dialogs.module.css"

import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer'








export default function Dialogs(props) {


let dialogsElements = props.dialogsPage.dialogsData.map((obj) => {
    return(
       <Dialog key={obj.id} name={obj.name} id={obj.id} /> 
    )
    
})

let messagesElemants = props.dialogsPage.messageData.map((obj) => {
    return (
       <div><Message key={obj.id} message={obj.message} id={obj.id} /></div>  
       
    )
})

let onSendMessageClick =() => {
    props.dispatch(sendMessageCreator())
}
let onMessageChange = (e) => {
    let text = e.target.value
    props.dispatch(updateNewMessageTextCreator(text))
}

  return (
    <div className={style.dialogs}> 
        <div className={style.dialog_items}>
            <h2>Dialogs</h2>
               
              {dialogsElements}
         

        </div>
    <div className={style.messages}> 
        <div>{messagesElemants}</div>
        <div>
            <div className={style.block_textarea}>
                <textarea 
                placeholder='Enter your message'
                value={props.dialogsPage.newMessageText}
                onChange={onMessageChange}
                ></textarea></div>
            <div className={style.button_block}>
                <button className={style.send_message} onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
        </div>
    
    </div>
  )
}
