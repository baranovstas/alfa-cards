import Image from '../image/Image';
import cardsItemStyles from './СardsItem.module.scss';

function CardsItem({ text, url, btnsGroup }) {
  const { item, figure, img, btns } = cardsItemStyles;
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
        {btnsGroup}
      </div>
    </li>
  );
}

export default CardsItem;