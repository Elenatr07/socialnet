const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postsData: [
        {id: 1, post: 'Hi, how are you?', likesCount: 1},
        {id: 2, post: 'Hello', likesCount: 8}
      ],
        newPostText: 'same text'
}


export const profileReducer = (state = initialState, action) => {
 /*   if (action.type === ADD_POST) {
        let newPost = {
            id: 3,
            post: state.newPostText,
            likesCount: 17
        };
        state.postsData.push(newPost);
        state.newPostText = '';
       
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newPost;
        
    } 
    return state;
    */
   switch(action.type) {
    case ADD_POST: {
        let newPost = {
            id: 3,
            post: state.newPostText,
            likesCount: 17
        };
        let stateCopy = {...state} // создаем копию state, можно сделать глобально и вынести за пределы switch
        stateCopy.postsData = [...state.postsData]; //создаем копию вложенного state.postsData
        stateCopy.postsData.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
        let stateCopy ={...state}
        stateCopy.newPostText = action.newPost;
        return stateCopy;
    }
        default:
            return state;
   }
   
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newPost: text 
    }
}
