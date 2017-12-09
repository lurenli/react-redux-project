import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchComment,getCommentData} from'./../action/counter';
import NavLink from './NavLink';
//1.view
class Comment extends React.Component{
  componentWillMount(){
   this.props.fetchComment();
 }
 getTime=(str)=>{
  var reg = /([\d\-]+)T(\d+:\d+):.*/;
  return str.replace(reg,"$1 $2");
}
  render(){
      var style={textDecoration:"none"}
       
      const {newsId,comment} = this.props;
       var ComentData=[];

      if(newsId.length==0){
        return <NavLink to="news">
              <button type="butotn" className="btn btn-primary">返回选择新闻</button>
              </NavLink>
     }
     
     if(comment.length!=0){
      for(var i=0;i<comment.length;i++){
        if(newsId._id==comment.rows[i].newsId){
          ComentData.push(
            <div className="panel panel-primary" key={i}>
              <div className="panel panel-primary">{this.getTime(comment.rows[i].date)}
                 </div>
              <div className="panel-body" dangerouslySetInnerHTML={{__html:comment.rows[i].content}}>
                </div>
           </div>
            ) 
        }
      }
     }
     return (
       <div>
          <NavLink to="/news">
                <button type="button" className="btn btn-default floatright">返回
                   </button>
          </NavLink>
          <div className="jumbotron">
             <h2>{newsId.maintitle}</h2>
              <div dangerouslySetInnerHTML={{__html:newsId.content}}></div>
          </div>
          <ul className="List-group">
            {ComentData}
          </ul>
          <div>

          </div>
  	    </div>
  	)

	}
}


//把状态变成属性
const getValue = (state)=>{
	return{
    comment:state.reducer.comment,
    newsId:state.reducer.newsId,
	}
}
//mapDispatchToProps是一个对象，既然是对象就可以用{}表达式,是对的！！！


//4.Container
const CommentContext = connect(getValue,{fetchComment,getCommentData})(Comment);

export default CommentContext;