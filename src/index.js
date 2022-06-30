import React from 'react';
import ReactDOM from 'react-dom/client';
//import { createStore } from 'redux';
//import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//const store = createStore(rootReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 

  <BrowserRouter >
    <Provider store={store}>
      <React.StrictMode >    
          <App />       
      </React.StrictMode> 
    </Provider> 
  </BrowserRouter>

);

reportWebVitals();