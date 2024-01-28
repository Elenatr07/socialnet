
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';




function App(props) {
  return (
    <BrowserRouter> 
        <div className="app-wrapper">
        <HeaderContainer />
            <Navbar />
            <div className='main_content'>
                <Routes>
                    <Route path='/profile/*' 
                            element={<ProfileContainer />} /> {/*Все необходимо поместить в тег BrowserRouter и Roures*/}
                   
                   <Route path='/profile/:userId'
                          element={<ProfileContainer/>}/>
                   
                    <Route path='/dialogs/*' 
                          element={<DialogsContainer 
                              // store={props.store}
                                 />} />
                    <Route path='/users/*' 
                  element={<UsersContainer />} />
               
                  
                </Routes>
                
    
            </div>
        
    
        </div>
    </BrowserRouter>
   
  );
}

export default App;