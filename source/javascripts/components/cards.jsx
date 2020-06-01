import React from 'react';
import { useStores } from '../stores/use-stores'
import { observer } from 'mobx-react'
import { Card } from './card';

// NOTE: The MobX pattern for this component was taken from here:
// https://mobx-react.js.org/recipes-context
export const Cards = observer(() => {
  let { deckStore } = useStores();

  return <div className="cards">
    { deckStore.cards.map((card, index) => <Card card={ card } key={ index } />) }
  </div>;
});
