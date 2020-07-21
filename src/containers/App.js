import React, { Component } from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer'


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}
	componentDidMount() {
		fetch('/api/customers')
			.then(response => {
				return response.json();
			})
			.then(users => {
				this.setState({ robots: users });
			}) 
			.catch (err => console.log(err))

	}
	onSearchChange = (event) => {
		this.setState({
			searchField: event.target.value
		})
	}
	handleDelete = () => {
		alert('Button Clicked!')
	}
	handleDelete = robotId => {
		const robots = this.state.robots.filter (robot => robot.id !== robotId);
		this.setState({robots:robots});
	}
	
	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		if (!robots.length) {
			return <h1>Loading</h1>
		} else {
			return (
				<main className='tc'>
					<h1 className='f1'>Office Employees</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots} />
						
						<button className='delete' onClick={this.handleDelete}>Delete</button>
					</Scroll> 
					<button className = " myButton"onClick={() => window.location.reload(false)}>RESET</button>
					<Footer />
				</main>
			)
		}
	}
}

export default App;