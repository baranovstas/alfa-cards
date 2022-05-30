import Image from '../image/Image';
import Button from '../button/Button';
import {
  btn,
  btn_like,
  btn_delete,
} from '../components/cardsItem/СardsItem.module.scss';
import Icon from '../icon/Icon';
import { faHeart as faHeartSolid, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

// CardItem
function CardsItem({
  text,
  url,
  isLiked,
}) {
  const likeBtnIcon = isLiked ?
    <Icon icon={faHeartSolid} className={icon} /> :
    <Icon icon={faHeartRegular} className={icon} />;

  const deleteBtnIcon = (
    <Icon icon={faTrash} className={icon} />
  );

  return (
    <li className={item}>
      <figure className={figure}>
        <Image
          className={img}
          src={url}
          alt={text}
        />
        <figcaption>
          <p>{text}</p>
        </figcaption>
      </figure>
      <div className={btns}>
        <Button
          onClick={onClickLike}
          className={`${btn} ${btn_like}`}
          label="Поставить лайк на карточку"
        >
          {likeBtnIcon}
        </Button>
        <Button
          onClick={onClickDelete}
          className={`${btn} ${btn_delete}`}
          label="Удалить карточку"
        >
          {deleteBtnIcon}
        </Button>
      </div>
    </li>
  );
}

export default CardsItem;
