import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS'

let initialState = {
    postsData: [
        {id: 1, post: 'Hi, how are you?', likesCount: 1},
        {id: 2, post: 'Hello', likesCount: 8}
      ],
   
    profile: null,
    status: ""
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
            post: action.newPostText,
            likesCount: 17
        };
        let stateCopy = {...state} // создаем копию state, можно сделать глобально и вынести за пределы switch
        stateCopy.postsData = [...state.postsData]; //создаем копию вложенного state.postsData
        stateCopy.postsData.push(newPost);
        
        return stateCopy;
    }
    
    case SET_USER_PROFILE: {
        return {
            ...state,
            profile: action.profile
        }

    }
    case SET_STATUS: {
        return {
            ...state,
            status: action.status
        }
    }
    case DELETE_POST: {

        return {
            ...state,
            postsData: state.postsData.filter(p => p.id !== action.postId)
        }
    }
        default:
            return state;
   }
   
}

export const addPostActionCreator = (newPostText) => {//newPostText название name из Field
    return {
        type: ADD_POST, newPostText
    }
}



export const setUserProfileCreator = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const setUserStatusCreator = (status) => {
    return {
        type: SET_STATUS, status
    }
}
export const deletePostCreator = (postId) => {
    return {
        type: DELETE_POST, postId
    }
}

//thunk

export const getUserProfileThunk = (profileId) => async (dispatch) => {
   let res = await profileAPI.getProfile(profileId)
      
          dispatch (setUserProfileCreator(res.data))
         
        };

export const getUserStatusThunk = (profileId) => async (dispatch) => {
   let res = await profileAPI.getStatus(profileId)
       
          dispatch (setUserStatusCreator(res.data))
         
     
};

export const updateUserStatusThunk = (status) => async (dispatch) => {
  let res = await  profileAPI.updateStatus(status)
      
        if (res.data.resultCode === 0) { //resultCode ===0 это требование зависит от того что backend считает полодительным ответом
           dispatch (setUserStatusCreator(status)) 
        }
}