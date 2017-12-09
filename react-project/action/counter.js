//对OnCreaseClick 进行了分析 ，只是把它进行了一个重命名，将OnCreaseClick名称缩短了，改成incrase
export const increase =()=>{
	return {
		type:"INCREASE"
	}
}

export const decrease=()=>{
   return {
	   type:"DECREASE"
	}
}


//仅仅是进行发布操作
 export const getListData=(data)=>{
 	return {
 		type:"GETLISTS",
 		data
 	}
 }
 //仅仅是进行发布操作
export const getNewsData=(data)=>{
 	return {
 		type:"GETNEWS",
 		data
 	}
 }
export const getCommentData=(data)=>{
 	return {
 		type:"GETCOMMENTDATA",
 		data
 	}
 }
export const addToCartFun = (data)=>{
	return {
		type:"ADDTOCART",
		data
	}
}
export const getNewsIdFun = (data)=>{
	return {
		type:"WATCHNEWID",
		data
	}
}
export function watchNewsId(params){
	return dispatch=>{
		dispatch(getNewsIdFun(params));
	}
}

export function addToCart(params){
	return dispatch=>{
		dispatch(addToCartFun(params));
	}
}
 export function fetchList(params={page:1}){
 	
 	//第一步进行了发布，请求了数据库
 	return dispatch=>{

 		var start = 20 * (params.page - 1);
 		var url = `http://api.douban.com/v2/movie/top250?start=${start}`;
 		return fetch(url)
 		.then(res=>{
 			return res.json()
 		})
 		.then((data)=>{
 			//数据库返回来一个json对象,这个对象就是data
 			//第二步进行了一次发布,调用了getListData这个函数进行了传递
 			dispatch(getListData(data));
 		})
 	}
 }

 export function fetchNews(params={page:1}){
 	return dispatch=>{
 		var start = 2 * (params.page - 1);
 		var url =`http://localhost:3000/news/list`
 		return fetch(url,{
 			method:"POST",
 			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({
			 
			})
		})
 		.then(res=>{
           return res.json()
 		})
 		.then((data)=>{
          dispatch(getNewsData(data));
 		})
 	}
 }
 export function fetchComment(params={page:1}){
 	return dispatch=>{
 		var start = 2 * (params.page - 1);
 		var url =`http://localhost:3000/comments/list`
 		return fetch(url,{
 			method:"POST",
 			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({
			})
		})
 		.then(res=>{
           return res.json()
 		})
 		.then((data)=>{
 			console.log(data)
          dispatch(getCommentData(data));
 		})
 	}
 }
