import React, {Component} from 'react';
import './MenuItem.css';


class MenuItem extends Component
{ 
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			selected:this.props.selected,
			className:'menuItemContainer'
		};
		
		this.text = this.props.text;
		this.callback = this.props.callback;
		
		this.update = this.update.bind(this);
		this.compileJsx = this.compileJsx.bind(this);
		this.mDown = this.mDown.bind(this);
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
			selected:newProps.selected
		});
	}
	
	shouldComponentUpdate(newProps,newState)
	{
		if (newState.selected === this.state.selected)
		{
			return false;
		}
		return true;
	}
	
	update(newDataA)
	{
		
	}
	
	mDown(e)
	{
		this.callback(this.props.text);
	}
	
	compileJsx()
	{
		var cName = '';
		if (this.state.selected)
		{
			cName = 'selected';
		}
		
		var jsx = <p className={cName}>
					{this.text}
				  </p>;
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<li className={this.state.className} onClick={this.mDown}>
				{jsx}
			</li>
		);
	}
}

export default MenuItem;