import React, {Component} from 'react';
import './LoremDisplay.css';


class LoremDisplay extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			dataA:this.props.dataA,
			className:''
		};
		
		this.timeout = null;
		
		this.show = this.show.bind(this);
		this.update = this.update.bind(this);
		this.createParagraphs = this.createParagraphs.bind(this);
		this.compileJsx = this.compileJsx.bind(this);
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
		if (newProps.dataA !== this.state.dataA)
		{
			this.timeout = setTimeout(this.update,501,newProps.dataA);
			this.setState(
			{
				className:''
			});
		}
	}
	
	/*shouldComponentUpdate(newProps,newState)
	{
		if (newState.)
		{
			
		}
	}*/
	
	show()
	{
		this.setState(
		{
			className:'show'
		});
	}
	
	update(newDataA)
	{
		this.setState(
		{
			dataA:newDataA,
			className:'show'
		});
	}
	
	createParagraphs()
	{
		var paragraphJsx = [];
		for (var i=0;i<this.state.dataA.length;i++)
		{
			var jsx = <div key={'paragraph'+i}>
						<p>
							{this.state.dataA[i]}
						</p>
						<br/>
					  </div>;
			
			paragraphJsx.push(jsx);
		}
		
		return paragraphJsx;
	}
	
	compileJsx()
	{
		var jsx = <div>
					{this.createParagraphs()}
				  </div>;
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
				
		return(
			<div id={'loremContainer'} className={this.state.className}>
				{jsx}
			</div>
		);
	}
}

export default LoremDisplay;