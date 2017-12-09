//store 就是数据仓库
import {createStore,applyMiddleware,compose} from 'redux';//compose是一个增强器
import reducer from './../reducers/index';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import DevTools from './DevTools';


const loggerMiddleWare = createLogger()//创建一个日志功能的中间件
//中间键现在有两个 一个是thunk 一个是logger
const middleware  = [thunk,loggerMiddleWare]
//const store = createStore(reducer,applyMiddleware(...middleware));


const finalCreateStore = compose(
  applyMiddleware(...middleware),
  DevTools.instrument()
)(createStore)//创建一个finalCreateStore 除了原来的createStore 功能以外，还增强了中间件功能以及开发工具的功能


export default finalCreateStore;