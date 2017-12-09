import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import reducer from './counter';
import update from './update';

export default combineReducers({
	update,
	reducer,
	routing:routerReducer
})

//多模块将reducer进行合并并操作