import Image from '../image/Image';
import Button from '../button/Button';

import cardsItemStyles from '../cardsItem/СardsItem.module.scss';

const CardsItem = ({
  text,
  url,
  btnsGroupData,
}) => (
  <li className={cardsItemStyles.item}>
    <figure className={cardsItemStyles.figure}>
      <Image
        className={cardsItemStyles.img}
        src={url}
        alt={text}
      />
      <figcaption>
        <p>{text}</p>
      </figcaption>
    </figure>
    <div className={cardsItemStyles.btns}>
      { btnsGroupData.map(({ clickHandler, className, label, children }) => (
        <Button
          key={label}
          clickHandler={clickHandler}
          className={`${cardsItemStyles.btn} ${className}`}
          label={label}
        >
          {children}
        </Button>
      ))}
    </div>
  </li>
);

export default CardsItem;