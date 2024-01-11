import React from 'react'



import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'








export default function DialogsContainer() {


 return (
    <StoreContext.Consumer> 
        {(store) => {
            let onSendMessageClick =() => {
    store.dispatch(sendMessageCreator())
}
let onMessageChange = (text) => {
    store.dispatch(updateNewMessageTextCreator(text))
}
        return (
    <Dialogs 
                    sendMessage = {onSendMessageClick}
                    updateNewMessageText={onMessageChange}
                    dialogsData={store.getState().dialogsPage.dialogsData}
                    messageData={store.getState().dialogsPage.messageData}
                    newMessageText={store.getState().dialogsPage.newMessageText}
                    />)
        }
    }

    </StoreContext.Consumer>
      
  )
}
