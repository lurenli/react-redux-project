import React,{Component} from 'react';
import {connect} from 'react-redux';
import {increase,decrease,fetchList,addToCart} from'./../action/counter';
//1.view
class Counter extends React.Component{
  componentWillMount(){
      this.props.fetchList();
  }
  changePages(e){
    var page = e.currentTarget.getAttribute('data-page');
    var params = {page:parseInt(page)};
    this.props.fetchList(params);
  }
  addCart(e){
     var idx = e.currentTarget.getAttribute('data-idx');
     const addToCartProduct = this.props.subjects[idx]; //通过下标获取到一个产品
     this.props.addToCart(addToCartProduct); //现在在这里没定义
  }
  render(){
		const {value,value1,lists,increase,decrease,fetchList,addToCart} = this.props; //从属性里找到传递过来的状态和内容
		//value/value1其实是状态
		//increase decrease其实是方法
		//现在我统一都变成props属性
    
		 if(!lists){
       return <div>数据加载中....</div>;
     }

      var output = [];
      var pages = 1;
      var outputPages = [];
       pages = Math.ceil(lists.total/20);
      for(let i=1;i<=pages;i++){
        outputPages.push(
              <li key={i}><a href="javascript:void(0)" data-page={i} onClick={(e)=>this.changePages(e)}>{i} </a></li>
          )
      }

      for(let i=0;i<lists.subjects.length;i++){
         output.push(
          <div className="col-lg-4" key={i}>
             <h2>{lists.subjects[i].title}</h2>
             <p>{lists.subjects[i].originalal_title}</p>
             <p>
             <a className="btn btn-default" href="javascript:void(0)" role="button">查看详情 &raquo;</a>
             <a className="btn btn-primary" href="javascript:void(0)" role="button" data-idx={i} onClick={(e)=>this.addCart(e)}>加入购物车</a>
             </p>
         </div>
           
          )
      }

  return (
       <div>
         <span>counter:{value}</span>
         <br/>
         <span>counter1:{value1}</span>
         <br/>
          <button onClick={increase}>计数+1</button>
          <button onClick={decrease}>计数-1</button>
          <button onClick={fetchList}>获取数据</button>
         <br/>
         <nav aria-label="...">
            <ul className="pagination">
                {outputPages}
            </ul>
          </nav>
           <ul>
            {output}
           </ul>
          
  	</div>
  	)

	}
}


//把状态变成属性
const getValue = (state)=>{
	return{
		value:state.reducer.count,
		value1:state.reducer.count1,
		lists:state.reducer.lists,
	}
}
//mapDispatchToProps是一个对象，既然是对象就可以用{}表达式,是对的！！！


//4.Container
const CounterContext = connect(getValue,{increase,decrease,fetchList,addToCart})(Counter);

export default CounterContext;