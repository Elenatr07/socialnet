
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';




function App(props) {
  return (
    <BrowserRouter> 
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className='main_content'>
                <Routes>
                    <Route path='/profile/*' 
                            element={<Profile 
                           // store={props.store}
                           
                             
                                
                                />} /> {/*Все необходимо поместить в тег BrowserRouter и Roures*/}
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