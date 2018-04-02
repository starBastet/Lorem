import React, {Component} from 'react';
import './MenuList.css';
import MenuItem from './MenuItem';


class MenuList extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			dataA:this.props.dataA,
			selectedNum:this.props.selectedNum
		};
		
		this.callback = this.props.callback;
		
		this.createListItems = this.createListItems.bind(this);
		this.compileJsx = this.compileJsx.bind(this);
		this.itemClicked = this.itemClicked.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	componentWillReceiveProps(newProps)
	{
		
	}
	
	itemClicked(text)
	{
		var newSelectedNum = this.state.selectedNum;
		for (var i=0;i<this.state.dataA.length;i++)
		{
			if (text === this.state.dataA[i])
			{
				newSelectedNum = i;
				break;
			}
		}
		
		this.setState(
		{
			selectedNum:newSelectedNum
		});
		
		this.callback(newSelectedNum);
	}
	
	createListItems()
	{
		var listJsx = [];
		for (var i=0;i<this.state.dataA.length;i++)
		{
			var selected = false;
			if (i === this.state.selectedNum)
			{
				selected = true;
			}
			
			var jsx = <MenuItem 
					  	key={'menuItem'+i}
						selected={selected}
						text={this.state.dataA[i]}
						callback={this.itemClicked}
					  />
			
			listJsx.push(jsx);
		}
		
		return listJsx;
	}
	
	compileJsx()
	{
		var jsx = <div>
					{this.createListItems()}
				  </div>;
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
				
		return(
			<ul id={'menuListContainer'}>
				{jsx}
			</ul>
		);
	}
}

export default MenuList;