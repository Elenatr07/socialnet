import { dialogsAPI, usersAPI } from "../api/api";
import { setCurrentPageCreator, setTotalUsersCountCreator } from "./usersReducer";


const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';
const GET_LIST = 'dialogs/GET_LIST'
const GET_FRIENDS= 'dialogs/GET_FRIENDS'
const GET_CHARTING = 'dialogs/GET_CHARTING'


let initialState = {
     dialogsData: [],
    dialogs: [],
    friends: [],
    chats:[]
        
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
            ...action.dialogs,
          
          }        
        case GET_LIST:
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

export const getListMessagesCreator = (dialogs) => {
    return {
        type: GET_LIST, dialogs
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

export const sendMessageCreator = (body) => { //body это название name из Fielg в Dialogs
    return {
        type: SEND_MESSAGE, body
    }
}



//thunk

export const getListMessagesThunk = (friendId) => async (dispatch) => {
    const res = await dialogsAPI.getListMessages(friendId)
    
        dispatch (getListMessagesCreator(res.data.items))
    

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
export const sendMessageThunk = (friendId, body) => async (dispatch) => {

    const res = await dialogsAPI.sendMessage(friendId, body)
    if(res.data.resultCode === 0) {
        dispatch (sendMessageCreator(body));
      dispatch(getListMessagesThunk(friendId))
         
      }
   
}





