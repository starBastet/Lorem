import React, {Component} from 'react';
import './Base.css';
import data from './data/json.json';
import ControlOverlay from './controlOverlay/ControlOverlay';
import LoremDisplay from './loremDisplay/LoremDisplay';
import MenuPanel from './menuPanel/MenuPanel';


class Base extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			jDataA:data,
			paragraphDataA:null,
			showMenu:false
		};
		
		this.paragraphMapA = [];
		this.category = 'STANDARD';
		this.paragraphAmount = 3;
		this.paragraphSize = 'M';
		
		this.createParagraphMap = this.createParagraphMap.bind(this);
		this.createParagraphs = this.createParagraphs.bind(this);
		this.callMenu = this.callMenu.bind(this);
		this.newCategoryChosen = this.newCategoryChosen.bind(this);
		this.updateParagraphAmount = this.updateParagraphAmount.bind(this);
		this.updateParagraphSize = this.updateParagraphSize.bind(this);
		this.getSizedLength = this.getSizedLength.bind(this);
		//this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		this.createParagraphMap();
		this.createParagraphs();
	}
	
	componentDidMount()
	{
		//console.log(this.state.jDataA.CATEGORY_LIST_A);
	}
	
	createParagraphMap()
	{
		var dataA = this.state.jDataA.PARAGRAPH_MAP_STRING_A;
		
		for (var i=0;i<dataA.length;i++)
		{
			var arr = dataA[i].split(" ");
			var punctuationA = [];
			for (var j=0;j<arr.length;j++)
			{
				var punctuationObj;
				
				if (String(arr[j]).indexOf('.') > -1)
				{
					punctuationObj = {I:j,P:'.'};
					punctuationA.push(punctuationObj);
				}
				else if (String(arr[j]).indexOf(',') > -1)
				{
					punctuationObj = {I:j,P:','};
					punctuationA.push(punctuationObj);
				}
				else if (String(arr[j]).indexOf('?') > -1)
				{
					punctuationObj = {I:j,P:'?'};
					punctuationA.push(punctuationObj);
				}
			}
			
			var paragraphDataObj = {LENGTH:arr.length,PUNCTUATION_A:punctuationA};
			this.paragraphMapA.push(paragraphDataObj);
		}
	}
	
	createParagraphs()
	{
		var paragraphAmount = this.paragraphAmount;
		
		var standardA = this.state.jDataA.CATEGORIES.STANDARD.WORD_LIST.split(' ');
		var customA = this.state.jDataA.CATEGORIES[this.category].WORD_LIST.split(' ');
		var paragraphDataA = [];
		var paragraphNum = 0;
		
		for (var i=0;i<paragraphAmount;i++)
		{
			var paragraphStr = '';
			
			var length = this.getSizedLength(paragraphNum);
			var punctuationA = this.paragraphMapA[paragraphNum].PUNCTUATION_A;
			var currIndex = 0;
			var nextPunctuationIndex = punctuationA[currIndex].I;
			var capitalize = true;
			
			for (var j=0;j<length;j++)
			{
				var bank = standardA;
				var randRoll = Math.random();
				if (randRoll >= .3)
				{
					bank = customA;
				}
				
				var randWordNum = Math.floor(Math.random()*(bank.length-1));
				var newWord = bank[randWordNum];
				if (capitalize)
				{
					var upperLetter = newWord.charAt(0).toUpperCase()+newWord.slice(1);
					newWord = upperLetter;
					capitalize = false;
				}
				if (j > 0)
				{
					paragraphStr += ' ';
				}
				paragraphStr += newWord;
				
				if (j === nextPunctuationIndex) // && currIndex < punctuationA.length
				{
					paragraphStr += punctuationA[currIndex].P;
					if (punctuationA[currIndex].P === '.' || punctuationA[currIndex].P === '?')
					{
						capitalize = true;
					}
					if (currIndex < punctuationA.length-1)
					{
						currIndex++;
						nextPunctuationIndex = punctuationA[currIndex].I;
					}
				}
			}
			
			paragraphDataA.push(paragraphStr);
			paragraphNum++;
			if (paragraphNum >= this.paragraphMapA.length)
			{
				paragraphNum = 0;
			}
		}
		
		this.setState(
		{
			paragraphDataA:paragraphDataA,
			showMenu:false
		});
	}
	
	getSizedLength(paragraphNum)
	{
		var cutCountA;
		if (this.paragraphSize === 'S')
		{
			cutCountA = [3,4,4];
		}
		else if (this.paragraphSize === 'M')
		{
			cutCountA = [2,3,3];
		}
		else if (this.paragraphSize === 'L')
		{
			return this.paragraphMapA[paragraphNum].LENGTH;
		}
		
		var arr = this.paragraphMapA[paragraphNum].PUNCTUATION_A;
		var count = 0;
		var length = 0;
		
		for (var i=arr.length-1;i>-1;i--)
		{
			if (arr[i].P === '.' || arr[i].P === '?')
			{
				count++;
				if (count === cutCountA[paragraphNum])
				{
					length = Number(arr[i].I)+1;
					break;
				}
			}
		}
		
		return length;
	}
	
	callMenu()
	{
		this.setState(
		{
			showMenu:true
		});
	}
	
	updateParagraphAmount(amount)
	{
		this.paragraphAmount = amount;
		this.createParagraphs();
	}
	
	newCategoryChosen(newCategoryNum)
	{
		this.category = this.state.jDataA.CATEGORY_LIST_A[newCategoryNum];
		this.createParagraphs();
	}
	
	updateParagraphSize(size)
	{
		this.paragraphSize = size;
		this.createParagraphs();
	}
	
	compileJsx()
	{
		//var data = this.state.jDataA;
		
		
		//return jsx;
	}
	
	render()
	{
		//var jsx = this.compileJsx();
		//		 className={this.state.className}
		//		{jsx}
		
		return(
			<div id={'appContainer'}>
				<MenuPanel 
					dataA={this.state.jDataA.CATEGORY_LIST_A}
					showMenu={this.state.showMenu}
					callback={this.newCategoryChosen}
				/>
				<LoremDisplay 
					dataA={this.state.paragraphDataA}
				/>
				<ControlOverlay
					brandingDataA={this.state.jDataA.BRANDING}
					controlOverlayDataA={this.state.jDataA.CONTROL_OVERLAY_TEXTS_A} 
					selectedFiller={this.category}
					callMenuCallback={this.callMenu}
					updateParagraphAmountCallback={this.updateParagraphAmount}
					updateParagraphSizeCallback={this.updateParagraphSize}
				/>
			</div>
		);
	}
}

export default Base;