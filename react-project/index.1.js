import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux';
import store from './store/index';
import {increase,decrease,fetchList} from './action/counter';

//1.view

class  Counter extends React.component{
	render(){
		const {value,value1,lists,increase,decrease,fetchList} = this.props; //从属性里找到传递过来的状态和内容
		//value/value1其实是状态
		//increase decrease其实是方法
		//现在我统一都变成props属性
		
	if(!lists){
		return <li>数据加载中....</li>
	}
    var output = [];
    for(let i=0;i<lists.length;i++){
    	output.push(<li key={i}>{lists[i].title}</li>)
    }
  return (
       <div>
         <span>counter:{value}</span>
         <br/>
         <span>counter1:{value}</span>
         <br/>
         <ul>
             {output}
         </ul>
         <br/>
          <button onclick={increase}>计数+</button>
		      <button onclick={decrease}>计数-1</button>
		      <button onclick={fetchList}>获取数据</button>
  	</div>
  	)

	}
}


//把状态变成属性

const getValue = (state)=>{
	return{
		value:state.count,
		value1:state.count1,
		lists:state.lists,
    news:state.news,
	}
}
//mapDispatchToProps是一个对象，既然是对象就可以用{}表达式,是对的！！！


//4.Container
const CounterContext = connect(getValue,{increase,decrease,fetchList,fetchNews})(Counter);

ReactDOM.render(
   <Provider store={store}>
      <CounterContext/>
   </Provider>
 ,document.getElementById('app')
)