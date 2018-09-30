import React, { Component } from 'react';
import TopBar from './container/topBar';
import Headline from './container/headline/headline';
import Subheading from './container/subheading/subheading';
import Accordion from './container/accordion';
import BottomBar from './container/bottomBar';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(results => { return results.json()})
		.then(data => {
			this.setState({
				userData: data,
			})
		})
	}

	handleClick() {
		console.log('you clicked a button!')
	}
	render() {
		return (
			<div className="App">
				<TopBar />
				<Headline />
				<Subheading />
				<Accordion data={this.state.userData} buttonClick={this.handleClick}/>
				<BottomBar />
			</div>
		);
	}
}

export default App;
