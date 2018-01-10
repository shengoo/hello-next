import {Component} from 'react'
import Layout from '../components/MyLayout'

const step = 1;

class Counter extends Component{

	constructor(props){
		super(props);
		this.state = { number: 0};
	}

	componentDidMount(){
		this.timer = setInterval(this.increment.bind(this),1000);	
	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}

	increment(){
		this.setState({number: this.state.number + step});
	}

	render(){
		return (
			<Layout>
				<div>counter: { this.state.number }</div>
			</Layout>
		)
	}

}

export default Counter;
