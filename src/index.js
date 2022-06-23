import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
//import { rootReducer } from './redux/rootReducer';
import { counterReducer } from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//const store = createStore(rootReducer);
const store = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 

  <BrowserRouter >
    <React.StrictMode >
      <Provider store={store}>
        <App />
      </Provider>    
    </React.StrictMode> 
  </BrowserRouter>

);

reportWebVitals();