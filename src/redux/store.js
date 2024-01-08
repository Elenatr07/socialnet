import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";


let store = {
    _state:{
    profilePage: {
  
        postsData: [
        {id: 1, post: 'Hi, how are you?', likesCount: 1},
        {id: 2, post: 'Hello', likesCount: 8}
      ],
        newPostText: 'same text'
    },
    dialogsPage: {
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
        newMessageText: '',
      
},
    sidebar: {}
   },
   getState() {
    return this._state;
   },
   _callSubscriber () {console.log ('State changed')},

    subscribe (observer) {            //запуск функции для перерендера страницs после изменения state
    this._callSubscriber = observer;
    },
    dispatch (action){ // { type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)


     /* dispatch до внедрения reducer
     
     if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                post: this._state.profilePage.newPostText,
                likesCount: 17
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state); //запуск функции для перерендера страницs после изменения state
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPost;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessege = {
                id: 5,
                message:this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messageData.push(newMessege);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessege;
            this._callSubscriber(this._state)
        }*/

        
    } ,
    
}








  export default store;