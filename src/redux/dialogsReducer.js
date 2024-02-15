import { dialogsAPI, usersAPI } from "../api/api";
import { setCurrentPageCreator, setTotalUsersCountCreator } from "./usersReducer";


const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';
const START_CHARTING = 'dialogs/START_CHARTING'
const GET_FRIENDS= 'dialogs/GET_FRIENDS'
const GET_CHARTING = 'dialogs/GET_CHARTING'

let initialState = {
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: "Hello"},
        {id: 3, message: 'Hola'},
        {id: 4, message: 'Salud'}
      ],       
    dialogsData: [],

    dialogs: [],
    friends: []
        
}
export const dialogsReducer = (state=initialState, action) => {
 /* использование if else
   if (action.type === SEND_MESSAGE) {
        let newMessege = {
            id: 5,
            message: state.newMessageText,
        };
        state.messageData.push(newMessege);
        state.newMessageText = '';
       
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessege;
     
    }*/

    /* использование switch*/
   
    switch(action.type) { 
        
        case SEND_MESSAGE: 
          return {
            ...state,
            dialogs: action.dialogs
          }        
        case START_CHARTING:
            return {
                ...state,
                dialogs: action.dialogs
            } 
            case GET_FRIENDS: 
            return {
                
                ...state,
                friends: action.friends.filter((friend) => friend.followed) /*state.friends.map(friend => {
                    if(friend.followed) {
                        return {...friend}
                    }
                    return friend
                }) */
            }
            case GET_CHARTING:
                return {
                    ...state,
                    dialogsData: action.dialogsData
                }
            default:
                return state;
    }

    
}

export const startChartingCreator = (dialogs) => {
    return {
        type: START_CHARTING, dialogs
    }
}
/* можно улучшить код
switch (action.type)
case SEND_MESSAGE: 
return {
    ...state, //копирование state
    newMessageText: '',
    messageData: [...state.messageData, {id:5, message: state.newMessageText }], //копирование messageData и добавление нового сообщения
},
case UPDATE_NEW_MESSAGE_TEXT: 
return {
    ...state,
    newMessageText: action.newMessege;

}

*/
export const getChartingCreator = (dialogsData) => {
    return {
        type: GET_CHARTING, dialogsData
    }
}

export const getFriendsCreator = (friends) => {
    return {
        type: GET_FRIENDS, friends
    }
}

export const sendMessageCreator = (newMessageText) => { //newMessageTaet это название name из Fielg в Dialogs
    return {
        type: SEND_MESSAGE, newMessageText
    }
}

//thunk

export const startChatingThunk = (friendId) => async (dispatch) => {
    const res = await dialogsAPI.startChating(friendId)
    
        dispatch (startChartingCreator(res.data.messages))
    

}

export const getFriendsThunk = (currentPage, pageSize) => async (dispatch) => {
    const res = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(getFriendsCreator(res.items));
    dispatch(setTotalUsersCountCreator(res.totalCount));
    dispatch(setCurrentPageCreator(currentPage));

}
export const getChatingThunk = (dialogsData) => async (dispatch) => {
    const res = await dialogsAPI.getChating(dialogsData)
    dispatch (getChartingCreator(res.data))
  

}
export const sendMessageThunk = (userId, newMessageText) => async (dispatch) => {

    const res = await dialogsAPI.sendMessage(userId)
    if(res.data.resultCode === 0) {
        dispatch (sendMessageCreator(newMessageText))
    }
    
  

}

