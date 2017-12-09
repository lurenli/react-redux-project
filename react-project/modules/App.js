import React,{Component} from 'react';
import NavLink from './NavLink';


class App extends Component{
	
	render(){
		return(
			 <div className="navbar-wrapper">
		      <div className="container">
		        <nav className="navbar navbar-inverse navbar-static-top">
		          <div className="container">
		            <div className="navbar-header">
		              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		                <span className="sr-only">Toggle navigation</span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		              </button>
		              <a className="navbar-brand" href="#">React Project</a>
		            </div>
		            <div id="navbar" className="navbar-collapse collapse">
		              <ul className="nav navbar-nav" >
		                <li className="active"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
		                <li><NavLink to="/about">About</NavLink></li>
		                <li><NavLink to="/counter">counter</NavLink></li>
		                <li><NavLink to="/carts">carts</NavLink></li>
		                <li><NavLink to="/news">news</NavLink></li>
		                <li><NavLink to="/comment">comment</NavLink></li>
		                <li>
			               <form className="navbar-form navbar-right">
					            <div className="form-group">
					              <input type="text" placeholder="Email" className="form-control"/>
					            </div>
					            <div className="form-group">
					              <input type="password" placeholder="Password" className="form-control"/>
					            </div>
					            <button type="submit" className="btn btn-success">Sign in</button>
          				</form>
              			</li>
		              </ul>
		            </div>

		          </div>
		        </nav>
		      </div>
		      <div className="container">
                 {this.props.children}
		      </div>
   		 </div>
		)
	}
}

module.exports = App;