import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { contacts } from './reducers/contacts';
import { App } from './components/App';
//import contacts from './reducers/contacts';

const store = createStore(contacts); //pass in from reducer contacts.js

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
