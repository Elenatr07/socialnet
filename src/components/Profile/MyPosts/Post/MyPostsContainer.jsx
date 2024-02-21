import React from "react";

import MyPosts from "../MyPosts";
import { addPostActionCreator } from "../../../../redux/profileReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { getListMessagesThunk, sendMessageThunk, startChatingThunk } from "../../../../redux/dialogsReducer";
import { withRouter } from "../../ProfileContainer";
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";





let mapStateToProps = (state) => {
    return {
       postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
      dialogsData: state.dialogsPage.dialogsData,
      dialogs: state.dialogsPage.dialogs,
    friends: state.dialogsPage.friends,
    owner:state.auth.id
    

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
     
        addPost: (newPostText)=> { //newPostText название name из Field из MyPosts
            dispatch(addPostActionCreator(newPostText));
        }

    }
}
const MyPostsContainer = compose(connect (mapStateToProps,
     {mapDispatchToProps,
        getListMessages: getListMessagesThunk,
        sendMessage: sendMessageThunk

}), withRouter)  (MyPosts)

export default MyPostsContainer;