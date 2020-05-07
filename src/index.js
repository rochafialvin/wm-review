import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from '../src/reducers/index'

let final_store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
   <Provider store = {final_store}>
      <App/>
   </Provider>, 
   document.getElementById('root'))