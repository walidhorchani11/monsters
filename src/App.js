import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters : []
    }
  }

  componentDidMount(){
    //setting state here will trigger re-rendering
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => {
        console.log('in component did mount set state to reRender ');
        return response.json();
    })
      .then(users => {this.setState({monsters : users})})
      
  }

  render(){
    return (
      <div>
      {console.log('component rendered ...')}
        {
          this.state.monsters.map( monster => (<h1 key={monster.id}>{monster.name}</h1>))
        }
      </div>
    )
  }
}

export default App;
