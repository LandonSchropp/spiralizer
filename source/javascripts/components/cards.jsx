import React from 'react';
import { useStores } from '../stores/use-stores'
import { observer } from 'mobx-react'

// NOTE: The MobX pattern for this component was taken from here:
// https://mobx-react.js.org/recipes-context
export const Cards = observer(() => {
  let { deckStore } = useStores();

  let cards = deckStore.cards.map((card, index) => {
    return <div className="card" key={ index }>
      { card.name }
    </div>;
  })

  return <div className="cards">
    { cards }
  </div>;
});
