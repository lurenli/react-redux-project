var _= require('lodash');
var initialState = {
	count:0,
	count1:0,
	lists:[],
	carts:[],
	news:[],
	comment:[],
	newsId:[]
}

//action 有两个内容 ,一个是type,一个是payload
function reducer(state = initialState,action){
	switch(action.type){
		case "INCREASE":
		   return Object.assign({},state,{count:state.count+1});
		case "DECREASE":
		   return Object.assign({},state,{count1:state.count1-1});
		 default:
		 case "GETLISTS":
		   return Object.assign({},state,{lists:action.data});
		 case "GETNEWS":
		   return Object.assign({},state,{news:action.data});  
		 case "WATCHNEWID":
		   return Object.assign({},state,{newsId:action.data});
		  case "GETCOMMENTDATA":
		   return Object.assign({},state,{comment:action.data});     
          case "ADDTOCART":
            var pos = _.findIndex(state.carts,{'id':action.data.id});
            if(pos === -1){
                   action.data.quantity ==1;
            }else{
                action.data.quantity = state.carts[pos].quantity +1;   
            }
		   return {
               ...state,
               Carts:[
                   ...state.carts,
                   action.data
               ]
		   }
		 return  state; 
	}
}
export default reducer; 