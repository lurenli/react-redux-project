import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'element-react';
import 'element-theme-default';


class Home  extends Component{ 
	  render(){
     return (
       <div>
             <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
		        <ol className="carousel-indicators">
		          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
		          <li data-target="#carousel-example-generic" data-slide-to="1" className=""></li>
		          <li data-target="#carousel-example-generic" data-slide-to="2" className=""></li>
		        </ol>
		        <div className="carousel-inner" role="listbox">
		          <div className="item active">
		            <img data-src="holder.js/1140x500/auto/#777:#555/text:First slide" alt="First slide [1140x500]" src="../img/4.jpg" data-holder-rendered="true"/>
		          </div>
		          <div className="item">
		            <img data-src="holder.js/1140x500/auto/#666:#444/text:Second slide" alt="Second slide [1140x500]" src="../img/2.jpg" data-holder-rendered="true"/>
		          </div>
		          <div className="item">
		            <img data-src="holder.js/1140x500/auto/#555:#333/text:Third slide" alt="Third slide [1140x500]" src="../img/3.jpg" data-holder-rendered="true"/>
		          </div>
		        </div>
		        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
		          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		          <span className="sr-only">Previous</span>
		        </a>
		        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
		          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		          <span className="sr-only">Next</span>
		        </a>
          </div> 

          <div className="container marketing">
      <div className="row">
        <div className="col-lg-4" >
          <div className="hi"><img className="img-circle" src="../img/8.jpg" alt="Generic placeholder image" width="140" height="140"/></div>
          <h2>AI智能</h2>
          <p>Artificial intelligence, it is a research, development, used to simulate, extend and expand the theory, method, technology and the application of the intelligent system is a new technology of science.It attempts to understand the essence of intelligence, and can produce a new kind of response in the form of human intelligence similar intelligent machines, research in this field include robot, speech recognition, image recognition, natural language processing and expert system, etc.Since the birth of artificial intelligence, the theory and technology matures, application field expands unceasingly, also can imagine, the future of artificial intelligence technology, will be a "container" of human wisdom.Artificial intelligence is not smart, but could think like people, also be more than the intelligence of people.</p>
          <p><a className="btn btn-default" href="#" role="button">View details »</a></p>
        </div>
        <div className="col-lg-4">
          <div className="hi"><img className="img-circle" src="../img/9.jpg" alt="Generic placeholder image" width="140" height="140"/></div>
          <h2>知识海洋</h2>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p><a className="btn btn-default" href="#" role="button">View details »</a></p>
        </div>
        <div className="col-lg-4">
         <div className="hi"> <img className="img-circle" src="../img/10.jpg" alt="Generic placeholder image" width="140" height="140"/></div>
          <h2>亲手创业</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a className="btn btn-default" href="#" role="button">View details »</a></p>
        </div>
      </div>


      

      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="500x500" src="../img/5.jpg" data-holder-rendered="true"/>
        </div>
      </div>

      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7 col-md-push-5">
          <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5 col-md-pull-7">
          <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="500x500" src="../img/6.jpg" data-holder-rendered="true"/>
        </div>
      </div>

      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="500x500" src="../img/7.jpg" data-holder-rendered="true"/>
        </div>
      </div>

      <hr className="featurette-divider"/>
      <footer>
        <p className="pull-right"><a href="#">Back to top</a></p>
        <p>© 2016 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>

    </footer>

    </div>
 	</div>
	   )
	}
}


module.exports = Home;