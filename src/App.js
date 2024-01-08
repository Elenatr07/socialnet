
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';




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
                            profilePage={props.appState.profilePage}
                            dispatch={props.dispatch}
                           
                             
                                
                                />} /> {/*Все необходимо поместить в тег BrowserRouter и Roures*/}
                    <Route path='/dialogs/*' 
                    element={<Dialogs 
                                dialogsPage={props.appState.dialogsPage} 
                                dispatch={props.dispatch}
                                 />} />
                    
                </Routes>
                
    
            </div>
        
    
        </div>
    </BrowserRouter>
   
  );
}

export default App;