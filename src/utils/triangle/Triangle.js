import React, {Component} from 'react';
import './Triangle.css';


class Triangle extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			
		};
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	shouldComponentUpdate(newProps,newState)
	{
		return false;
	}
	
	render()
	{
		return(
			<div id={'triangleContainer'}>
			</div>
		);
	}
}

export default Triangle;