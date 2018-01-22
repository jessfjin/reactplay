import React from 'react';

// 1. class/create coponent
// 2. constructor/props/super props
// 3. render/return
// 4. export default XXnameXX

class Footer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			state: 'california',
			season: 'winter'
		};
	}

	render(){
		return(
			<p> I am in {this.state.state} in the {this.state.season}.</p>
		)
	}

}

export default Footer