import { createSelector } from '@reduxjs/toolkit';

import CoffeeItem from '../components/CoffeeItem/CoffeeItem';

function selectCoffeeData({ coffee: { coffeeData } }) {
  return coffeeData;
}

function selectIsFetched({ coffee: { isFetched } }) {
  return isFetched;
}

const selectCoffee = createSelector(
  selectCoffeeData,
  selectIsFetched,
  (coffeeData, isFetched) => {
    if (isFetched) {
      return coffeeData.map(
        function ({ blend_name, id, origin, notes }) {
          return (
            <CoffeeItem
              name={blend_name}
              origin={origin}
              notes={notes}
              key={id}
            />
          );
        }
      );
    }
  }
);

export { selectCoffee };