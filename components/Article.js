import React from 'react';
import Child from './Child'
import SecondChild from './SecondChild'

class Article extends React.Component{

    constructor(props){
        super(props)
        this.state = {
           text: "Hey I am an article about nothing", 
           childText: 'Hey I am child article',
           childHeader: 'Yo whats up momma',
           contentText: 'hey Im the second childs text article that lives in the parents states. lorem	esp kljsdfk dkd fw hii sdkjf mom dad',
           mySignature: 'jess f jin ~',
           img: <img src="http://www.petwave.com/~/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-3.ashx">
        };
    }

// es6 syntax, new way of writing js
    consoleClick=()=>{
    	console.log('I am clicked');
    	this.setState({text: 'Ive been clicked!'})
    }
//  passing down the state to props
    render(){
        return(
        	<div>
	            <h2>{this.state.text}</h2>

	            <Child article={this.state.childText} header={this.state.childHeader}/>

	            <SecondChild content={this.state.contentText} signature={this.state.mySignature}/>

	            <button className = "btn btn-primary"
	            onClick={this.consoleClick}> Click Me! 
	            </button>


            </div>
        )
    }
}

export default Article;



