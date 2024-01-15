import React from 'react'

import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'



/*
данные из state
let f1 = (state) =>{
return {
    dialogsData:state.dialogsPage.dialogsData
}
}
collback-функции
let f2 =(dispatch)=> {
    return {

    }
}
 
    const Connect = connect (f1, f2) (Dialogs) создает компаненту Dialogs и передает в нее в качестве props f1, f1*/


    let mapStateToProps = (state) => {
        return {
            dialogsData: state.dialogsPage.dialogsData,
            messageData: state.dialogsPage.messageData,
            newMessageText: state.dialogsPage.newMessageText

        }
    }
    let mapDispatchToProps = (dispatch) => {
        return {
            sendMessage: () => {
                dispatch(sendMessageCreator())
            },
            updateNewMessageText: (text)=> {
                dispatch(updateNewMessageTextCreator(text))
            }

        }
    }
 const DialogsContainer = connect (mapStateToProps, mapDispatchToProps ) (Dialogs) 

 export default DialogsContainer;