import React from 'react';
import { useStores } from '../stores/use-stores'
import { observer } from 'mobx-react'

// NOTE: The MobX pattern for this component was taken from here:
// https://mobx-react.js.org/recipes-context
export const Card = observer(({ card }) => {

  return <div className="card">
    <img className="card__image" src={ card.imageURL } />
  </div>;
});
