import React from 'react'
import {Field, reduxForm} from "redux-form"
import { Input } from '../FormControls/FormControls'
import { email, requiredField } from '../../utils/validators/validator'
import { connect } from 'react-redux'
import { loginThunk } from '../../redux/authReducer'
import { Navigate} from 'react-router-dom'
import style from "./Login.module.css"


const Login =(props) => {

  const onSubmit = (formData) => {
   // debugger
   // alert(formData.email + " " +  formData.password)
   props.login(formData.email, formData.password, formData.rememberMe);
  }
  if(props.isAuth) {
    return <Navigate replace to="/profile" />
  }
  return (
    <div>
    <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    
    </div>
  )
  
}

function LoginForm (props) {
  //debugger;  
 
  return (
   
   //handleSubmit встроеннаяя в redux-form функция, доступна через пропс, после передачи LoginForm в reduxForm
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} component={Input} name={"email"} validate={[requiredField, email]}/>
      </div>
      <div>
        <Field placeholder={"Password"} component={Input} name={"password"} validate={[requiredField]} type='password' />
      </div>
      <div>
        <Field type={"checkbox"} component={Input} name={"remembeMe"}  /> remembe me
      </div>
      {props.error && <div className={style.formSummaryError}>
       {props.error}
      </div>}
      
      <div>
        <button>Login</button>
      </div>
    </form>
    
    
  )
}



const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'email'
  })(LoginForm)

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login: loginThunk}) (Login);