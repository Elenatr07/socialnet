import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




import App from './App';
import { store } from './redux/reduxStore';
import StoreContext from './StoreContext';


//rerenderTree функция для перерендера страницы после измнения state
const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderTree = () => {
   
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
          <App 
           //   store={store.getState()} 
           //   dispatch={store.dispatch.bind(store)}
              />
    </StoreContext.Provider>

  </React.StrictMode>
); 
}

rerenderTree();
store.subscribe(rerenderTree);
/* альтернативный перерендер если не работает первый вариант
store.subscribe(() => {
  let state = store.getState();
  rerenderTree(state);
}) */