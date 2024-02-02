import React from 'react'

import { sendMessageCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'




//hoc
  //  let AuthRedirectComponent = withAuthRedirect(Dialogs) //передано в compose
   /* аналогично let AuthRedirectComponent =
    (props) => {
        if (!props.isAuth) return <Navigate to="/login"></Navigate>
        return <Dialogs {...props}/>
    }*/

    let mapStateToProps = (state) => {
        return {
            dialogsData: state.dialogsPage.dialogsData,
            messageData: state.dialogsPage.messageData,
            newMessageText: state.dialogsPage.newMessageText,
           // isAuth: state.auth.isAuth

        }
    }
    let mapDispatchToProps = (dispatch) => {
        return {
            sendMessage: (newMessageText) => { //newMessageTaet это название name из Fielg в Dialogs
                dispatch(sendMessageCreator(newMessageText))
            },
           

        }
    }
 //const DialogsContainer = connect (mapStateToProps, mapDispatchToProps ) (AuthRedirectComponent) 
 //передано в compose

 export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)