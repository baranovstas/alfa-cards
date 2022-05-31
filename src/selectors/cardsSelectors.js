import { createSelector } from '@reduxjs/toolkit';

import CardsItemContainer from '../containers/CardsItemContainer';
import CardsItem from '../components/cardsItem/CardsItem';

function selectCardsData({ cards: { cardsData } }) {
  return cardsData;
}

export const selectCardsError = ({ cards: { error } }) => error;

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

// ой ой ой) селектор не должен возвращать компоненты
const selectCards = createSelector(
  selectCardsData,
  selectLikedCards,
  selectIsFilteredByLikes,
  selectIsFetched,
  (cardsData, likedCards, isFilteredByLikes, isFetched) => {
    if (isFetched) {
      // ненужный комментарий
      // проверка свойства isFilteredByLikes, в зависимости от него, массив данных о карточках отфильтруется только по  лайкнутым, в ином случае для преобразования данных в компоненты уйдёт исходный массив
      const visibleData = isFilteredByLikes ?
        cardsData.filter(
          ({ id }) => likedCards.includes(id)
        ) :
        cardsData;

      return visibleData.map(({ title, url, id }) => {
        return {
          title,
          url,
          id,
          isLiked: likedCards.includes(id)
        }
      });
    }

    return [];
  }
);

export { selectCards };
