// use children
import CardsItem from '../cardsItem/CardsItem';

const CardsList = ({ cards }) => (
  // что за класс?
  <ul className='cards__list'>
    {cards.map(({ title, url, id, isLiked }) => {
      // вынести в функцию
      const cardsText = title.charAt(0).toUpperCase() + title.slice(1);

      return (
        <CardsItem
          id={id}
          text={cardsText}
          isLiked={isLiked}
          url={url}
        />
      );
    })}
  </ul>
);

export default CardsList;
