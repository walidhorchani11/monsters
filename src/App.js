import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
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

  handleChange = (event) => {
    let searchInput = event.target.value;
    this.setState({searchField: searchInput})
    //filter monsters selon searchField

  }

  render(){
    return (
      <div>
        {console.log('component rendered ...')}
        <div>
          <input type='search' placeholder='search monster' onChange={e => {
            this.setState({searchField: e.target.value}, () => console.log(this.state.searchField));
            
            }}/>
        </div>
        <CardList monsters = {this.state.monsters}/>
      </div>
    )
  }
}

export default App;
