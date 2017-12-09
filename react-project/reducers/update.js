var initialState ={
	update:0
}

function update(state=initialState,action){
	switch(action.type){
		case "INCREASE":
		  return Object.assign({},state,{update:state.update +1})
       default:
          return state;
	}
}

export default update;