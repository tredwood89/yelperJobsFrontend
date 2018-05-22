import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk'
import { Provider } from 'react-redux'
import { yelperReducer} from './actionreducer/reducers/reducer'

const store = createStore(yelperReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, document.getElementById('root'));
