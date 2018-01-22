import React from 'react';

class Header extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			fruit: "banana"			
		};
	}

	render(){
		return(
			<h1>Test {this.state.fruit}</h1>
			)
	}

}

export default Header;