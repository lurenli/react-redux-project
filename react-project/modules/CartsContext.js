import React,{Component} from 'react';
import {connect} from 'react-redux';
var _= require('lodash');
//1.view
class Carts extends React.Component{
	render(){

		const {carts} = this.props;
		var cartsList = _.uniqWith(carts._isEqual);//返回只有唯一值的购物清单
		
		var output = [];
		for(let i=0;i<cartsList.length;i++){
			output.push(<li key={i}>{cartsList[i].title}{cartsList[i].quantity}</li>)
		}
		return(
           <div>
             Cart lists
             <ul>
              {output}
             </ul>
           </div>
 
		)
	}
}

const getValue=state=>{
	return {
		carts:state.carts
	}
}

const  CartsContext = connect(getValue)(Carts)
module.exports = CartsContext;