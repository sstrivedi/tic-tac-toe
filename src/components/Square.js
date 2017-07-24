import React, { Component } from 'react';

class Square extends Component {
	render() {
		const className = this.props.highlight? this.props.highlight: 'square';
	return (
		<button className={className} onClick={() =>this.props.onClick()}>{this.props.value}
		</button>
	);
	}
}

export default Square;
