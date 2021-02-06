import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import someSwChars from './data/someSwChars.json';
import './App.css';


class App extends Component {
	constructor(){
		super();

		this.state = {
			characters: Object.values(someSwChars),
			searchField: '',
		 };
	}

	componentDidMount(){
	
	}

	handleChange = e => {
		this.setState({ searchField: e.target.value});
	}

	render() { 
		const {characters, searchField} = this.state;
		const filteredCharacters = characters.filter(character => {
			return character.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return ( 
			<div className="App">
				<h1>StarWars <br />Characters</h1>
				<SearchBox 
					placeholder="Search characters"
					handleChange={ this.handleChange } />
				<CardList characters={filteredCharacters} />
			</div>
		);
	}
	
}
 
export default App;
