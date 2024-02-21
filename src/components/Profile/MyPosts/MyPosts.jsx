import React, { useEffect } from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";
import { Field, reduxForm, reset } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validator";
import { Textarea } from "../../FormControls/FormControls";
import MessageBlock from "../../Dialogs/MessageBlock";

const maxLength310 = maxLengthCreator(310); //устанавливаем значие длины сообщения

//React.memo для контроля перерендинга в функциональной компоненте, перерендинг ТОЛЬКО при изменении пропс или стайт
//в классовой компоненте для этих целей надо использовать extends React.PureComponent
function MyPosts(props) {

  let userId = props.router.params.userId;
  let owner = props.owner
 
  let isUser = !userId ? owner : userId
  
 //alert('render')
 //console.log("RENDER")

 

  let onAddPost = (values) => {
    props.sendMessage(isUser, values.body); //newPostText название name из Field
  };

  useEffect(()=> {
    props.getListMessages(isUser)
  }, [])

  return (
    <div>
      {userId ? <div>
        <h2 className={style.title}>My posts</h2>

      <AddPostFormRedux onSubmit={onAddPost} />

      <div className={style.new_posts}>New posts</div>
      <MessageBlock friendId={isUser} dialogs={props.dialogs} owner={owner} />
      </div> : <div></div>  }
      
      
    </div>
  );
}



const addPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="body"
        validate={[requiredField, maxLength310]}
        placeholder="Post text"
      />

      <div className={style.button_block}>
        <button>Add post</button>
      </div>
    </form>
  );
};

const afterSubmit = (result, dispatch) =>
  dispatch(reset('myPostsAddForm')); //очистка полей формы после отправки

const AddPostFormRedux = reduxForm({ form: "myPostsAddForm",
onSubmitSuccess: afterSubmit,})(addPostForm);
export default MyPosts;
