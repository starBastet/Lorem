import React, {Component} from 'react';
import './ParagraphSizeToggle.css';
import Button from '../../utils/buttons/Button';


class ParagraphSizeToggle extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			sizeN:1
		};
		
		this.sizesA = ['S','M','L'];
		this.callback = this.props.callback;
		
		this.compileJsx = this.compileJsx.bind(this);
		this.createButtons = this.createButtons.bind(this);
		this.setSize = this.setSize.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	setSize(e,label)
	{
		var n = 0;
		for (var i=0;i<this.sizesA.length;i++)
		{
			if (label === this.sizesA[i])
			{
				n = i;
				break;
			}
		}
		
		this.callback(label);
		
		this.setState(
		{
			sizeN:n
		});
	}
	
	createButtons()
	{
		var btnJsxA = [];
		for (var i=0;i<this.sizesA.length;i++)
		{
			var cName = '';
			if (i === this.state.sizeN)
			{
				cName = 'active';
			}
			
			var jsx = <Button 
						className={cName}
						label={this.sizesA[i]}
						callback={this.setSize}
						key={'sizeBtn'+i}
					  />
			btnJsxA.push(jsx);
		}
		return btnJsxA;
	}
	
	compileJsx()
	{
		//var data = this.state.jDataA;
		
		var jsx = <div>
					<span>PARAGRAPH SIZE:</span>
					{this.createButtons()}
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div id={'paragraphSizeContainer'}>
				{jsx}
			</div>
		);
	}
}

export default ParagraphSizeToggle;