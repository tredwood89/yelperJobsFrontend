import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk'
import { Provider } from 'react-redux'
import { yelperReducer} from './actionreducer/reducers/reducer'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "react-apollo";
// import gql from "graphql-tag";


const client = new ApolloClient({
  uri:"https://w5xlvm3vzz.lp.gql.zone/graphql"
})
//
// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//           rate
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

const store = createStore(yelperReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </Router>, document.getElementById('root'));
