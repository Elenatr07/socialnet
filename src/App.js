
import {HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';

import UsersContainer from './components/Users/UsersContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {initializeApp} from './redux/appReducer'
import Preloader from './components/Preloader/Preloader';
import PageNotFound from './components/FormControls/PageNotFound';
import Home from './components/Home/Home';
const ProfileContainer = React.lazy(()=> import ('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(()=> import ('./components/Dialogs/DialogsContainer'));



class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("some error occured") //если в компоненте прописан локальный обработчик ошибки то глобальный уже не сработает на эту ошибку
  }
  componentDidMount() {

    this.props.initializeApp();
  /* перенос в authReduser
   authAPI.meAuth()
        // перенос в api и замена на authApi.meAuth)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
    .then(res => {
        //debugger
        //resultCoвe это инфа с сервера о том что авторизация состоялась, название и код зависит от настроек сервера
        if(res.data.resultCode ===0) {
            let {id, email, login} = res.data.data
            this.props.setAuthUser(id, email, login)
        }
    })*/
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors) 

    
}
componentWillUnmount() { //требуется обязательно если в componentDidMount есть какая-либо подписка на события!!! (например addEventListener)
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
}
  render () {
    if(!this.props.initialized) {return <Preloader />}
    return (
    <HashRouter > {/* BrowserRouter basename={process.env.PUBLIC_URL}*/}
        <div className="app-wrapper">
        <HeaderContainer />
            <Navbar />
            <div className='main_content'>
            <Suspense fallback={<div><Preloader /></div>}>
                <Routes> 
                    <Route path='/profile/*' 
                            element={<ProfileContainer />} /> {/*Все необходимо поместить в тег BrowserRouter и Routes*/}
                   
                   <Route path='/profile/:userId?'
                          element={<ProfileContainer/>}/> 
                   
                    <Route path='/dialogs/*' 
                          element={<DialogsContainer 
                              // store={props.store}
                                 />} />
                    <Route path='/users/*' 
                  element={<UsersContainer />} />
                        
                    <Route path='/login/*' 
                  element={<Login/>} /> 
                  <Route path='*' element={<PageNotFound />} />
                  <Route path='/home' element={<Home />} />
                   <Route path='' element={<Home />} />
               
                  
                </Routes>
                
                </Suspense>
    
            </div>
        
    
        </div>
    </HashRouter>
   
  );
}
  }
  const mapStateToProps = (state) => ({
    initialized: state.app.initialized
  })
  

export default compose(connect(mapStateToProps, {initializeApp})) (App);