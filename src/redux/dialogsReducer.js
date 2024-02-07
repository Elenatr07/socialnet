
const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

let initialState = {
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: "Hello"},
        {id: 3, message: 'Hola'},
        {id: 4, message: 'Salud'}
      ],       
        dialogsData: [
        {id: 1, name: 'Elena'},
        {id: 2, name: 'Joe'},
        {id: 3, name: 'Sam'},
        {id: 4, name: 'Mikhale'}
    ],
        
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
    let stateCopy = {...state};
    switch(action.type) { 
        
        case SEND_MESSAGE: 
            let newMessege = {
                id: 5,
                message: action.newMessageText,
            };
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(newMessege);
            return stateCopy; 
            //используем return взамен breake, если не использовать return или breake функция будет бесконечной
        
        
            default:
                return state;
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

export const sendMessageCreator = (newMessageText) => { //newMessageTaet это название name из Fielg в Dialogs
    return {
        type: SEND_MESSAGE, newMessageText
    }
}


