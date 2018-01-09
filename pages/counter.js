import {Component} from 'react'

const step = 1;

class Counter extends Component{

	constructor(props){
		super(props);
		this.state = { number: 0};
	}

	componentDidMount(){
		setInterval(this.increment.bind(this),1000);	
	}

	increment(){
		this.setState({number: this.state.number + step});
	}

	render(){
		return (
			<div>counter: { this.state.number }</div>
		)
	}

}

export default Counter;
