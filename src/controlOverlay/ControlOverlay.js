import React, {Component} from 'react';
import './ControlOverlay.css';
import Branding from '../branding/Branding';
import ParagraphFillerToggle from './toggles/ParagraphFillerToggle';
import ParagraphAmountToggle from './toggles/ParagraphAmountToggle';
import ParagraphSizeToggle from './toggles/ParagraphSizeToggle';


class ControlOverlay extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			selectedFiller:this.props.selectedFiller,
			className:''
		};
		
		this.brandingDataA = this.props.brandingDataA;
		this.controlOverlayDataA = this.props.controlOverlayDataA;
		this.timeout = null;
		this.callMenuCallback = this.props.callMenuCallback;
		this.updateParagraphAmountCallback = this.props.updateParagraphAmountCallback;
		this.updateParagraphSizeCallback = this.props.updateParagraphSizeCallback;
		
		this.show = this.show.bind(this);
		this.callMenu = this.callMenu.bind(this);
		this.updateFillerType = this.updateFillerType.bind(this);
		this.updateParagraphAmount = this.updateParagraphAmount.bind(this);
		this.updateParagraphSize = this.updateParagraphSize.bind(this);
		//this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		this.timeout = setTimeout(this.show,10);
	}
	
	componentWillReceiveProps(newProps)
	{
		if (newProps.selectedFiller !== this.state.selectedFiller)
		{
			this.setState(
			{
				selectedFiller:newProps.selectedFiller
			});
		}
	}
	
	show()
	{
		this.setState(
		{
			className:'show'
		});
	}
	
	callMenu()
	{
		this.callMenuCallback();
	}
	
	updateFillerType()
	{
		
	}
	
	updateParagraphAmount(amount)
	{
		this.updateParagraphAmountCallback(amount);
	}
	
	updateParagraphSize(label)
	{
		this.updateParagraphSizeCallback(label);
	}
	
	compileJsx()
	{
		//var data = this.state.jDataA;
		
		
		//return jsx;
	}
	
	render()
	{
		//var jsx = this.compileJsx();
		//		{jsx}
		return(
			<div id={'controlContainer'} className={this.state.className}>
				<Branding dataA={this.brandingDataA}/>
				<div id={'togglesContainer'}>
					<ParagraphFillerToggle 
						text={this.controlOverlayDataA.FILLER_TYPE}
						selectedFiller={this.state.selectedFiller}
						callback={this.callMenu}
					/>
					<ParagraphAmountToggle
						text={this.controlOverlayDataA.PARAGRAPH_AMOUNT} 
						callback={this.updateParagraphAmount}
					/>
					<ParagraphSizeToggle
						text={this.controlOverlayDataA.PARAGRAPH_SIZE}
						callback={this.updateParagraphSize}
					/>
				</div>
			</div>
		);
	}
}

export default ControlOverlay;