import React, { Component } from 'react';
import './App.css';


class App extends Component {
	constructor(){
		super();

		this.state = {
			monsters: [
				{
					name: 'Frankenstein',
					id: 'asc1',
				},
				{
					name: 'Dracula',
					id: 'asr2',
				},
				{
					name: 'Zombie',
					id: 'as1w',
				},
			]
		 };
	}
	render() { 
		return ( 
			<div className="App">
					{
						this.state.monsters.map(monster => {
							return <h2 key={monster.id}>{monster.name}</h2>;
						})
					}
			</div>
		);
  }
}
 
export default App;
