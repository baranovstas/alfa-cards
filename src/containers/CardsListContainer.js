import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardsList from '../components/cardsList/CardsList';
import Spinner from '../components/spinner/Spinner';
import Notification from '../components/notification/Notification';

import { fetchCardsData } from '../reducers/cardsSlice';
import { selectCards } from '../selectors/cardsSelectors';

function CardsListContainer() {
  const dispatch = useDispatch();

  const cards = useSelector(state => selectCards(state));

  const cardsData = useSelector(
    ({ cards: { cardsData } }) => cardsData
  );

  const likedCards = useSelector(
    ({ cards: { likedCards } }) => likedCards
  );

  const isFilteredByLikes = useSelector(
    ({ cards: { isFilteredByLikes } }) => isFilteredByLikes
  );

  useEffect(() => {
    dispatch(fetchCardsData());
  }, [dispatch]);

  if (!cards) return <Spinner />;

  if (!cardsData.length) {
    return <Notification text='Все карточки удалены' />;
  }
  else if (
    cardsData.length &&
    !likedCards.length &&
    isFilteredByLikes
  ) {
    return <Notification text='Нет лайкнутых карточек' />;
  }

  return <CardsList cards={cards} />;
}

export default CardsListContainer;