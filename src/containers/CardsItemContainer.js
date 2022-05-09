import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faHeartSolid,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

import CardsItem from '../components/cardsItem/CardsItem';
import Button from '../components/button/Button';
import Icon from '../components/icon/Icon';

import * as cardsActions from '../reducers/cardsSlice';

import '../components/cardsItem/cardsItem.scss';

function CardsItemContainer({ id, text, ...props }) {
  const dispatch = useDispatch();

  const likedCards = useSelector(
    ({ cards: { likedCards } }) => likedCards
  );

  const likeBtnIcon = likedCards.includes(id) ?
    <Icon icon={faHeartSolid} className='cards__icon' /> :
    <Icon icon={faHeartRegular} className='cards__icon' />;

  const deleteBtnIcon = (
    <Icon icon={faTrash} className='cards__icon' />
  );

  const { likeCard, deleteCard } = bindActionCreators(
    cardsActions, dispatch
  );

  const btnsGroupData = [
    {
      className: 'cards__btn_like',
      label: 'Поставить лайк на карточку',
      clickHandler: () => likeCard(id),
      children: likeBtnIcon
    },
    {
      className: 'cards__btn_delete',
      label: 'Удалить карточку',
      clickHandler: () => deleteCard(id),
      children: deleteBtnIcon
    },
  ];

  const btnsGroup = btnsGroupData.map(
    function ({ clickHandler, className, label, children }) {
      return (
        <Button
          key={label}
          clickHandler={clickHandler}
          className={`cards__btn ${className}`}
          label={label}
        >
          {children}
        </Button>
      );
    }
  );

  const cardsText = text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <CardsItem
      id={id}
      text={cardsText}
      btnsGroup={btnsGroup}
      {...props}
    />
  );
}

export default CardsItemContainer;