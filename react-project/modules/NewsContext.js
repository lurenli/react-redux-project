import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchNews,watchNewsId} from'./../action/counter';
import NavLink from './NavLink';
//1.view
class News extends React.Component{
  componentWillMount(){
   this.props.fetchNews();

}
getTime=(str)=>{
  var reg = /([\d\-]+)T(\d+:\d+):.*/;
  return str.replace(reg,"$1 $2");
}
  changePages(e){
    var page = e.currentTarget.getAttribute('data-page');
    var params = {page:parseInt(page)};
    this.props.fetchNews(params);
  }
  watch(e){
    var idx = e.currentTarget.getAttribute('data-idx');
    var newsId = this.props.news.rows[idx];
    this.props.watchNewsId(newsId);
  }
  render(){
		const {news,fetchNews,watchNewsId,newsId} = this.props; //从属性里找到传递过来的状态和内容
		//value/value1其实是状态
		//increase decrease其实是方法
		//现在我统一都变成props属性

		 if(!news){
       return <div>数据加载中....</div>;
     }

      var output = [];  
      var pages = 1;
      var outputPages = [];
      pages = Math.ceil(news.total/3);
      var arr=[];
      arr = news.rows;
      for(let i=1;i<=pages;i++){
        outputPages.push(
              <li key={i}><a href="javascript:void(0)" data-page={i} onClick={(e)=>this.changePages(e)}>{i} </a></li>
          )
      }    
     if(typeof arr !== "undefined"){ 
     //console.log('--',arr.length)
      for(let i=0;i<arr.length;i++){
         output.push(
          <NavLink  to="/comment" onClick={(e)=>this.watch(e)} key={i} data-idx={i} >
          <div className="btn-group btn-group-justified" role="group" aria-label="...">
            <div className="btn-group" role="group">
                <button  type="button" className="btn btn-default" >{news.rows[i].type}</button>
            </div>
          </div>
        </NavLink>
           
          )
      }
}
  return (
       <div>
          NEWS
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
		news:state.reducer.news,
    newsId:state.reducer.newsId
	}
}
//mapDispatchToProps是一个对象，既然是对象就可以用{}表达式,是对的！！！


//4.Container
const NewsContext = connect(getValue,{fetchNews,watchNewsId})(News);

export default NewsContext;