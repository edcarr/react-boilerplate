import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHashHistory } from 'history';

import App from './containers/App'
import Home from './components/Home'
import Foo from './components/Foo'
import configureStore from './store/configureStore'; 

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="foo" component={Foo}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)