import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import finalCreateStore from './store/index';
import reducer from './reducers/index';
import DevTools from './store/DevTools';
import {syncHistoryWithStore} from 'react-router-redux'
//通过同步syncHistoryWithStore可以实现路由的同步化操作，提高路由的操作性能



import App from './modules/App.js';
import About from './modules/About.js';
import Home from './modules/Home.js';
import CartsContext from './modules/CartsContext.js';
import CounterContext from './modules/CounterContext.js';
import NewsContext from './modules/NewsContext.js';
import CommentContext from './modules/CommentContext.js';
const store = finalCreateStore(reducer);

const history = syncHistoryWithStore(hashHistory,store)

ReactDOM.render(
	<Provider store={store}>
	<div>
	  <Router  history={history}>
	     <Route path="/" component={App}>
	          <IndexRoute component={Home}/>
	          <Route path="/about" component={About}/>
	          <Route path="/counter" component={CounterContext}/>
	          <Route path="/carts" component={CartsContext}/>
	          <Route path="/news" component={NewsContext}/>
	          <Route path="/comment" component={CommentContext}/>
	     </Route>
	   </Router>
	   <DevTools/>

	  </div>
	</Provider>,document.getElementById('app')
	) 