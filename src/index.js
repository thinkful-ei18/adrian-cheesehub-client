import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

const cheeses =   [
  "Bath Blue",
  "Barkham Blue",
  "Buxton Blue"
];


ReactDOM.render(
  <Provider store={store}>
  <CheeseList cheeseList={cheeses}/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
