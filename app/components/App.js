import React from 'react'
import _ from 'underscore';

export default class App extends React.Component {
	constructor(props) {
	    super(props);	    
	    this.state = { x: 0 };
  	}

	
	_onMouseMove(id, e) { 	
		var clientX = 0
		
		if (e.touches)
		{
			clientX = e.touches[0].clientX
			
		}	
		else
		{
			clientX = e.clientX
		}
		let {tabs} = this.props;		
		var highest = tabs.length		

		var newId = 0
		if(clientX <= 10)
		{
			newId = (id == 1) ? tabs.length : id - 1

		}
		else if (clientX >= (window.innerWidth - 10))
		{
			newId = (id == tabs.length) ? 1 : id + 1
		}

		if (newId){	
			tabs[newId - 1].class = "item active";
			tabs[id - 1].class = "item";
		}

	    this.setState({ x: screenX });
	}

	render(props) {
		const {tabs} = this.props;	
		const { x } = this.state;

		let _this = this;
		
		return (
			<div id="myCarousel" className="carousel slide" style={{width : "100%", height : "100%"}}>
			<div className="carousel-inner" style={{width : "100%", height : "100%"}} >
			{tabs.map(function(item) {			
				return <div key={item.id}  onMouseMove={_this._onMouseMove.bind(_this, item.id)} onTouchMove={_this._onMouseMove.bind(_this, item.id)} className={item.class}  style={{backgroundColor: item.color , width : "100%", height : "100%"}}>			
					<h1 className="text-center">{item.id}</h1>
				</div>
			})}
			</div>
			</div>
		)

	}
} 