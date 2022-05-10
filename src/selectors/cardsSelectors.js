import { createSelector } from '@reduxjs/toolkit';

import CardsItemContainer from '../containers/CardsItemContainer';

function selectCardsData({ cards: { cardsData } }) {
  return cardsData;
}

function selectLikedCards({ cards: { likedCards } }) {
  return likedCards;
}

function selectIsFilteredByLikes({
  cards: { isFilteredByLikes }
}) {
  return isFilteredByLikes;
}

function selectIsFetched({ cards: { isFetched } }) {
  return isFetched;
}

const selectCards = createSelector(
  selectCardsData,
  selectLikedCards,
  selectIsFilteredByLikes,
  selectIsFetched,
  (cardsData, likedCards, isFilteredByLikes, isFetched) => {
    if (isFetched) {
      // проверка свойства isFilteredByLikes, в зависимости от него, массив данных о карточках отфильтруется только по  лайкнутым, в ином случае для преобразования уйдёт исходный массив
      const visibleData = isFilteredByLikes ?
        cardsData.filter(
          ({ id }) => likedCards.includes(id)
        ) :
        cardsData;

      return visibleData.map(({ title, url, id }) => (
        <CardsItemContainer
          text={title}
          url={url}
          id={id}
          key={id}
        />
      ));
    }
  }
);

export { selectCards };