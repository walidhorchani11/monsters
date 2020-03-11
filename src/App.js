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

  render(){
    //besoin davoir les monsters du state intacte, pcq on modifiant directement le state monsters, au 2eme ou nieme changement dans l'input searchFeild, on n'aura pas les monsters completes mais deja filter, alors la sol est de faire le filter au niveau du render avec un new champs qui prends tous les monsters du state, puisqu il va etre reexecuter lors du setState (lors du changement d input) 
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div>
        {console.log('component rendered ...')}
        <div>
          <input type='search' placeholder='search monster' onChange={e => {
            this.setState({searchField: e.target.value}, () => console.log(this.state.searchField));
            
            }}/>
        </div>
        {/* <CardList monsters = {this.state.monsters}/> */}
        <CardList monsters = {this.state.searchField.length > 0 ? filteredMonsters : monsters}/>
      </div>
    )
  }
}

export default App;
