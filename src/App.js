import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

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

  handleSearch= e => {
    this.setState({searchField: e.target.value})
  }

  render(){
    //besoin davoir les monsters du state intacte, pcq on modifiant directement le state monsters, au 2eme ou nieme changement dans l'input searchFeild, on n'aura pas les monsters completes mais deja filter, alors la sol est de faire le filter au niveau du render avec un new champs qui prends tous les monsters du state, puisqu il va etre reexecuter lors du setState (lors du changement d input) 
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        {console.log('component rendered ...')}
        <SearchBox
          placeholder='search monster'
          handleSearch={this.handleSearch}
        />
        {/* <CardList monsters = {this.state.monsters}/> */}
        <CardList monsters = {this.state.searchField.length > 0 ? filteredMonsters : monsters}/>
      </div>
    )
  }
}

export default App;
