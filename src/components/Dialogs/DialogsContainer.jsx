import React from 'react'



import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'








export default function DialogsContainer(props) {



let onSendMessageClick =() => {
    props.dispatch(sendMessageCreator())
}
let onMessageChange = (text) => {
    props.dispatch(updateNewMessageTextCreator(text))
}

  return (
        <Dialogs 
            sendMessage = {onSendMessageClick}
            updateNewMessageText={onMessageChange}
            dialogsData={props.store.getState().dialogsData}
            messageData={props.store.getState().messageData}
            newMessageText={props.store.getState().newMessageText}
            />
  )
}
