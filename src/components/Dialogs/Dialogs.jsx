import React from 'react'
import style from "./Dialogs.module.css"

import Dialog from './Dialog/Dialog'
import Message from './Message/Message'









export default function Dialogs(props) {


let dialogsElements = props.dialogsData.map((obj) => {
    return(
       <Dialog key={obj.id} name={obj.name} id={obj.id} /> 
    )
    
})

let messagesElemants = props.messageData.map((obj) => {
    return (
       <div><Message key={obj.id} message={obj.message} id={obj.id} /></div>  
       
    )
})

let onSendMessageClick =() => {
    props.sendMessage()
}
let onMessageChange = (e) => {
    let text = e.target.value
    props.updateNewMessageText(text)
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
                value={props.newMessageText}
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
