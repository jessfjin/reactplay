import React from 'react';

class SecondChild extends React.Component {

	constructor(props){
		super(props)
		// waiting from props to be passed in from its parent (see render below)
	}	

	render() {
		return (
			<div>
				<p>{this.props.content}</p>
				<h6>{this.props.signature}</h6>
			</div>
		)
	}
}
 export default SecondChild;