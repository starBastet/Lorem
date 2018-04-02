import React, {Component} from 'react';
import './DropdownButton.css';
import Triangle from '../triangle/Triangle';


class DropdownButton extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			label:this.props.label
		};
		
		this.callback = this.props.callback;
		
		this.compileJsx = this.compileJsx.bind(this);
		this.clicked = this.clicked.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	componentWillReceiveProps(newProps)
	{
		this.setState(
		{
			label:newProps.label
		});
	}
	
	shouldComponentUpdate(newProps,newState)
	{
		if (newState.label === this.state.label)
		{
			return false;
		}
		return true;
	}
	
	clicked(e)
	{
		this.props.callback();
	}
	
	compileJsx()
	{
		var jsx = <div>
					<span>{this.state.label}</span>
					<Triangle/>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div id={'dropdownButtonContainer'} className={this.state.className} onClick={this.clicked}>
				{jsx}
			</div>
		);
	}
}

export default DropdownButton;