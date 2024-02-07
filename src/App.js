
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {initializeApp} from './redux/appReducer'
import Preloader from './components/Preloader/Preloader';




class App extends React.Component {
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
}
  render () {
    if(!this.props.initialized) {return <Preloader />}
    return (
    <BrowserRouter> 
        <div className="app-wrapper">
        <HeaderContainer />
            <Navbar />
            <div className='main_content'>
                <Routes>
                    <Route path='/profile/*' 
                            element={<ProfileContainer />} /> {/*Все необходимо поместить в тег BrowserRouter и Roures*/}
                   
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
               
                  
                </Routes>
                
    
            </div>
        
    
        </div>
    </BrowserRouter>
   
  );
}
  }
  const mapStateToProps = (state) => ({
    initialized: state.app.initialized
  })
  

export default compose(connect(mapStateToProps, {initializeApp})) (App);