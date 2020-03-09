import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters : [
        {name: 'dracula',id: Math.random()},
        {name: 'joker',id: Math.random()},
        {name: 'zombie',id: Math.random()}
      ]
    }
  }

  render(){
    return (
      <div>
        {
          this.state.monsters.map( monster => (<h1 key={monster.id}>{monster.name}</h1>))
        }
      </div>
    )
  }
}

export default App;
