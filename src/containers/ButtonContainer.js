import Button from '../components/button/Button';

function ButtonContainer(props) {
  const { likedCards, filteredByLikes } = useSelector(
    function ({ cards: { filteredByLikes, likedCards } }) {
      return { filteredByLikes, likedCards };
    }
  );
  // const likeBtnClasses = likedCards.includes(id) ?
  //   'cards__btn cards__btn_like cards__btn_like_active' :
  //   'cards__btn cards__btn_like';
  const filterBtnClasses = filteredByLikes ?
    'cards__filter cards__filter_active' :
    'cards__filter';
  return (
    <Button
      className={likeBtnClasses}
      {...props}
    >
    </Button>
  );
}

export default ButtonContainer;