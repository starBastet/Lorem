import React, {Component} from 'react';
import './ParagraphAmountToggle.css';
import Button from '../../utils/buttons/Button';


class ParagraphAmountToggle extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			paragraphAmount:3
		};
		
		this.text = this.props.text;
		this.callback = this.props.callback;
		
		this.compileJsx = this.compileJsx.bind(this);
		this.decrement = this.decrement.bind(this);
		this.increment = this.increment.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	decrement()
	{
		if (this.state.paragraphAmount <= 1)
		{
			return;
		}
		
		var amount = this.state.paragraphAmount - 1;
		this.callback(amount);
		
		this.setState(
		{
			paragraphAmount:amount
		});
	}
	
	increment()
	{
		if (this.state.paragraphAmount >= 9)
		{
			return;
		}
		
		var amount = this.state.paragraphAmount + 1;
		this.callback(amount);
		
		this.setState(
		{
			paragraphAmount:amount
		});
	}
	
	compileJsx()
	{
		var jsx = <div>
					<span>{this.text}{this.state.paragraphAmount}</span>
					<Button 
						label={'-'}
						callback={this.decrement}
					/>
					<Button 
						label={'+'}
						callback={this.increment}
					/>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div id={'paragraphAmountContainer'}>
				{jsx}
			</div>
		);
	}
}

export default ParagraphAmountToggle;