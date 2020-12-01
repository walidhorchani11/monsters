//test props render pattern for passing data between component

import React from 'react';
import { CardList } from './components/card-list/card-list.component';

import MonsterPropsRender from './PropsRender/MonsterPropsRender';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <MonsterPropsRender>
        {({ data }) => <CardList monsters={data} />}
      </MonsterPropsRender>
    </div>
  );
};

export default App;
