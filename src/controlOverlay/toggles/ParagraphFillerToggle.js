import React, {Component} from 'react';
import './ParagraphFillerToggle.css';
import DropdownButton from '../../utils/buttons/DropdownButton';


class ParagraphFillerToggle extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			selectedFiller:this.props.selectedFiller
		};
		
		this.text = this.props.text;
		this.callback = this.props.callback;
		
		this.callMenu = this.callMenu.bind(this);
		this.compileJsx = this.compileJsx.bind(this);
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
			selectedFiller:newProps.selectedFiller
		});
	}
	
	shouldComponentUpdate(newProps,newState)
	{
		if (newState.selectedFiller === this.state.selectedFiller)
		{
			return false;
		}
		return true;
	}
	
	callMenu()
	{
		this.callback();
	}
	
	compileJsx()
	{
		var jsx = <div>
					<span>{this.text}{this.state.paragraphAmount}</span>
					<DropdownButton 
						label={this.state.selectedFiller}
						callback={this.callMenu}
					/>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div id={'paragraphFillerContainer'}>
				{jsx}
			</div>
		);
	}
}

export default ParagraphFillerToggle;