import { dialogsAPI, usersAPI } from "../api/api";



const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';
const GET_LIST = 'dialogs/GET_LIST'
const GET_FRIENDS= 'dialogs/GET_FRIENDS'
const GET_CHARTING = 'dialogs/GET_CHARTING'
const SET_CORRENT_PAGE = 'dialogs/SET_CORRENT_PAGE'
const SET_TOTAL_MESSAGES_COUNT ='dialogs/SET_TOTAL_MESSAGES_COUNT'
const DEL_MESSAGE = 'dialogs/DEL_MESSAGE'



let initialState = {
     dialogsData: [],
    dialogs: [],
    friends: [],
    chats:[],
    pageSize: 10, //количество выводимых страниц
    totalMessagesCount: 0,
    currentPage: 1,
    
        
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
                case SET_CORRENT_PAGE:
                    return {
                        ...state,
                        currentPage: action.currentPage
                    }
                    case SET_TOTAL_MESSAGES_COUNT:
                        return {
                            ...state,
                            totalMessagesCount: action.count

                        }
                case DEL_MESSAGE:
                    return{
                        ...state,
                        dialogs: state.dialogs.filter(message => message.id !==action.messageId)
                        
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
export const setCurrentPageCreator = (currentPage) => {
    return {
        type: SET_CORRENT_PAGE, currentPage
    }
}
export const setTotalMessagesCountCreator = (totalMessagesCount) => {
    return {
        type: SET_TOTAL_MESSAGES_COUNT, count: totalMessagesCount
    }
}

export const delMessageCreator = (messageId) => {
    return {
        type: DEL_MESSAGE, messageId
    }
}


//thunk

export const getListMessagesThunk = (friendId, currentPage, pageSize) => async (dispatch) => {
    const res = await dialogsAPI.getListMessages(friendId, currentPage, pageSize)
      //dispatch (setCurrentPageCreator(currentPage))
        dispatch (getListMessagesCreator(res.data.items))
        
        dispatch(setTotalMessagesCountCreator(res.data.totalCount))
    

}

export const getFriendsThunk = (currentPage, pageSize) => async (dispatch) => {
    const res = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(getFriendsCreator(res.items));
    dispatch(setTotalMessagesCountCreator(res.totalCount));
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

export const delMessageThunk = (messageId) => async (dispatch) => {
    await dialogsAPI.delMessage(messageId);
    dispatch(delMessageCreator(messageId))
}





