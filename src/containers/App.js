import React, { Component } from 'react';
import {  Route, Switch,  } from 'react-router-dom';
import CardList from '../components/cardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer'
import ViewCard from '../components/ViewCard';



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
	handleDeleteRobot = () => {
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
				
			
					<Switch>
					<Route exact path='/view/:id' render={(props) => <ViewCard {...props} />} />
						<Route exact path= "/">
						<main className='tc'>
							<h1 className='f1'>Office Employees</h1>
							<SearchBox searchChange={this.onSearchChange} />
							<Scroll>
								<CardList robots={filteredRobots} handleDelete = {(id) => this.handleDelete(id)} />
								
								<button className='delete' onClick={() => this.handleDelete}>Delete</button>
							</Scroll> 
							<button className = " myButton"onClick={() => window.location.reload(false)}>RESET</button>
							<Footer />
						</main>
						</Route>

						
					</Switch>
				
			)
		}
	}
}

export default App;