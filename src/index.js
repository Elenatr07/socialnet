import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/reduxStore';
import { Provider } from 'react-redux';


//rerenderTree функция для перерендера страницы после измнения state
const root = ReactDOM.createRoot(document.getElementById('root'));

   
root.render(
 // <React.StrictMode> //отключен так как задваивает рендер users
    <Provider store={store}>
          <App 
           //   store={store.getState()} 
           //   dispatch={store.dispatch.bind(store)}
              />
    </Provider>

 // </React.StrictMode>
); 




