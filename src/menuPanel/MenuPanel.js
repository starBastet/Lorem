import React, {Component} from 'react';
import './MenuPanel.css';
import MenuList from './MenuList';


class MenuPanel extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			dataA:this.props.dataA,
			selectedNum:0,
			isShown:false,
			className:''
		};
		
		this.timeout = null;
		this.callback = this.props.callback;
		
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
		this.itemSelected = this.itemSelected.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		//this.timeout = setTimeout(this.show,10);
	}
	
	componentWillReceiveProps(newProps)
	{
		if (newProps.showMenu)
		{
			this.show();
		}
		else
		{
			this.hide();
		}
	}
	
	shouldComponentUpdate(newProps,newState)
	{
		if (newState.className === this.state.className)
		{
			return false;
		}
		return true;
	}
	
	show()
	{
		this.setState(
		{
			className:'show'
		});
	}
	
	hide()
	{
		this.setState(
		{
			className:''
		});
	}
	
	itemSelected(selectedNum)
	{
		this.callback(selectedNum);
		
		this.setState(
		{
			className:''
		});
	}
	
	render()
	{
		return(
			<div id={'menuContainer'} className={this.state.className}>
				<MenuList
					dataA={this.state.dataA}
					selectedNum={this.state.selectedNum}
					callback={this.itemSelected}
				/>
			</div>
		);
	}
}

export default MenuPanel;