import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props) => (
  <div className="card-list">
    {console.log('card list rendered')}
    {props.monsters.map((monster) => (
      <Card monster={monster} key={monster.id} />
    ))}
  </div>
);
