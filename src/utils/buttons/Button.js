import React, {Component} from 'react';
import './Button.css';


class Button extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			className:this.props.className
		};
		
		this.label = this.props.label;
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
			className:newProps.className
		});
	}
	
	shouldComponentUpdate(newProps,newState)
	{
		if (newState.className === this.state.className)
		{
			return false;
		}
		return true;
	}
	
	clicked(e)
	{
		this.props.callback(e,this.label);
	}
	
	compileJsx()
	{
		var jsx = <div>
					<span>{this.label}</span>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div id={'buttonContainer'} className={this.state.className} onClick={this.clicked}>
				{jsx}
			</div>
		);
	}
}

export default Button;