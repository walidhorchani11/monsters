import React, { useState, useEffect } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    console.log('fetched in useEffect .....');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => setMonsters(users));
  }, []);

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="search monster" handleSearch={handleSearch} />
      <CardList
        monsters={monsters.filter((elem) => {
          return searchField.length === 0
            ? true
            : elem.name.toLowerCase().includes(searchField.toLowerCase());
        })}
      />
    </div>
  );
};

export default App;
