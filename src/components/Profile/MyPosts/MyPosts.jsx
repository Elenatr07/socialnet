import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validator";
import { Textarea } from "../../FormControls/FormControls";

const maxLength10 = maxLengthCreator(10); //устанавливаем значие длины сообщения

function MyPosts(props) {
  let postsElements = props.postsData.map((obj) => {
    return <Post key={obj.id} message={obj.post} likesCount={obj.likesCount} />;
  });

  let onAddPost = (values) => {
    props.addPost(values.newPostText); //newPostText название name из Field
  };

  return (
    <div>
      <h2 className={style.title}>My posts</h2>

      <AddPostFormRedux onSubmit={onAddPost} />

      <div className={style.new_posts}>New posts</div>
      {postsElements}
    </div>
  );
}

const addPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newPostText"
        validate={[requiredField, maxLength10]}
        placeholder="Post text"
      />

      <div className={style.button_block}>
        <button>Add post</button>
      </div>
    </form>
  );
};
const AddPostFormRedux = reduxForm({ form: "myPostsAddForm" })(addPostForm);
export default MyPosts;
