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
         <Message key={obj.id} message={obj.message} id={obj.id} />
    )
})

  return (
    <div className={style.dialogs}> 
        <div className={style.dialog_items}>
            <h2>Dialogs</h2>
               
              {dialogsElements}
         

        </div>
    <div className={style.messages}> 
        {messagesElemants}
        </div>
    
    </div>
  )
}
