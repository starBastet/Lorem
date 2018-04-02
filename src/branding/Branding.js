import React, {Component} from 'react';
import './Branding.css';


class Branding extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
		};
		
		this.dataA = this.props.dataA;
		
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	compileJsx()
	{
		var textsA = this.dataA;
		
		var jsx = <div>
					<span>{textsA[0]}</span>
					<span className={'large'}>{textsA[1]}</span>
					<span>{textsA[2]}</span>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
				
		return(
			<div id={'brandingContainer'}>
				{jsx}
			</div>
		);
	}
}

export default Branding;