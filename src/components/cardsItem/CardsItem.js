import Image from '../image/Image';

function CardsItem({ text, url, btnsGroup, id }) {
  return (
    <li className='cards__item'>
      <figure className='cards__figure'>
        <Image
          className='cards__img'
          src={url}
          alt={text}
        />
        <figcaption className='cards__figcaption'>
          <p className='cards__text'>{text}</p>
          {/* <p className='cards__text'>{id}. {text}</p> */}
        </figcaption>
      </figure>
      <div className='cards__btns'>
        {btnsGroup}
      </div>
    </li>
  );
}

export default CardsItem;