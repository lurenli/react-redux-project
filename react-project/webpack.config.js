const webpack  = require('webpack');



module.exports = {
	entry:'./index.js',
	output:{
		publicPath:'',
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,exclude:/node_modules/,
				loader:'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
		    },
		    {
		    	test:/\.css/,
		    	loader:'style-loader!css-loader'
		    },
		     {
        		test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        		loader: 'file-loader'
     		 },
     		 {
       			 test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
       			 loader: 'file-loader',
        		 query: {
          		    name: '[name].[ext]?[hash]'
                  }
             }
	   ]
	},
	
}