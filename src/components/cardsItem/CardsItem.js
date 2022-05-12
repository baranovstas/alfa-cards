import Image from '../image/Image';

function CardsItem({
  text,
  url,
  btnsGroup,
  cardsItemStyles: { item, figure, img, btns }
}) {
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