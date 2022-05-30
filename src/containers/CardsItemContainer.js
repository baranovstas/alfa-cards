import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import CardsItem from '../components/cardsItem/CardsItem';

function CardsItemContainer({ id, text, ...props }) {

  const likedCards = useSelector(
    ({ cards: { likedCards } }) => likedCards
  );
  // вынести в функцию
  const cardsText = text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <CardsItem
      id={id}
      text={cardsText}
      isLiked={likedCards.includes(id)}
      {...props}
    />
  );
}

export default CardsItemContainer;
