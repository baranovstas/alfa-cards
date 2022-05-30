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

  const isFetching = useSelector(
    ({ cards: { isFetched } }) => isFetched
  );

  const likedCards = useSelector(
    ({ cards: { likedCards } }) => likedCards
  );

  const isFilteredByLikes = useSelector(
    ({ cards: { isFilteredByLikes } }) => isFilteredByLikes
  );

  useEffect(() => {
    dispatch(fetchCardsData());
  }, []);

  // забудь про инлайн ифы
  if (isFetching) {
    return <Spinner />;
  }

  // следующие условия проверяют весь массив с данными и массив лайкнутых карточек, чтобы показать пользователю соответствующее уведомление - если карточек не осталось в принципе либо если в массиве данных карточки остались, но при этом нет именно лайкнутых карточек
  // ненужный комментарий. проверка должна быть явной, в данной проверке непонятно, что ты проверяешь - наличие свойство length или длину массива
  if (cardsData.length === 0) {
    return <Notification text='Все карточки удалены' />;
  }

  if (
    likedCards.length === 0 &&
    isFilteredByLikes
  ) {
    return <Notification text='Нет лайкнутых карточек' />;
  }

  return <CardsList onClickLike={() => dispatch(deleteLikeAction)} cards={cards} />;
}
// компоненты нотификации и список карточек лучше вынести в отдельный компонент. Контейнер не должен содержать плогику касательно отображения
export default CardsListContainer;
