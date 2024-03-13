import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import ReduxStore from './Components/Redux/Store/ReduxStore';

ReactDOM.render(
  <Provider>
    <App  store={ReduxStore}/>
  </Provider>
  ,

  document.getElementById('root')
);
