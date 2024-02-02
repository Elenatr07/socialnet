import React from 'react';
import {Field, reduxForm} from "redux-form"

export default function LoginForm (props) {
  //debugger;  
 
  return (
   
   //handleSubmit встроеннаяя в redux-form функция, доступна через пропс, после передачи LoginForm в reduxForm
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} component={"input"} name={"login"}/>
      </div>
      <div>
        <Field placeholder={"Password"} component={"input"} name={"password"} />
      </div>
      <div>
        <Field type={"checkbox"} component={"input"} name={"remembeMe"} /> remembe me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
    
    
  )
}


export const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)