import React from 'react'

import { getChartingThunk, getChatingThunk, getFriendsThunk, sendMessageCreator, sendMessageThunk, startChartingThunk, startChatingThunk } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getPageSize, getTotalUsersCount, getcurrentPaget } from '../../redux/usersSelector'
import { getUsersThunkCreator } from '../../redux/usersReducer'





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
           dialogs: state.dialogsPage.dialogs,
           friends: state.dialogsPage.friends,
           pageSize: getPageSize(state),
           totalUsersCount: getTotalUsersCount(state),
            currentPage: getcurrentPaget(state),


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
    connect(mapStateToProps, {mapDispatchToProps, 
    startChating: startChatingThunk,
    getFriends: getFriendsThunk,
    getUsersThunk: getUsersThunkCreator,
    getChating: getChatingThunk,
    sendMessage:sendMessageThunk
}),
    withAuthRedirect)(Dialogs)