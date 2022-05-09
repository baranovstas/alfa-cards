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

import cardsItemStyles from '../components/cardsItem/СardsItem.module.scss';

function CardsItemContainer({ id, text, ...props }) {
  const dispatch = useDispatch();

  const likedCards = useSelector(
    ({ cards: { likedCards } }) => likedCards
  );

  const { btn, btn_like, btn_delete, icon } = cardsItemStyles;

  const likeBtnIcon = likedCards.includes(id) ?
    <Icon icon={faHeartSolid} className={icon} /> :
    <Icon icon={faHeartRegular} className={icon} />;

  const deleteBtnIcon = (
    <Icon icon={faTrash} className={icon} />
  );

  const { likeCard, deleteCard } = bindActionCreators(
    cardsActions, dispatch
  );

  const btnsGroupData = [
    {
      className: btn_like,
      label: 'Поставить лайк на карточку',
      clickHandler: () => likeCard(id),
      children: likeBtnIcon
    },
    {
      className: btn_delete,
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
          className={`${btn} ${className}`}
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