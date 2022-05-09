import { useSelector, useDispatch } from 'react-redux';

import Button from '../button/Button';
import Section from '../../layouts/Section';
import ErrorMessage from '../errorMessage/ErrorMessage';
import CardsListContainer from '../../containers/CardsListContainer';

import { toggleFilter } from '../../reducers/cardsSlice';

import '../../assets/styles/styles.scss';

function App() {
  const dispatch = useDispatch();

  const error = useSelector(({ cards: { error } }) => error);

  const isFilteredByLikes = useSelector(
    ({ cards: { isFilteredByLikes } }) => isFilteredByLikes
  );

  const filterBtnClasses = isFilteredByLikes ?
    'cards__filter cards__filter_active' :
    'cards__filter';

  const onFilterCards = () => dispatch(toggleFilter());

  if (error) return <ErrorMessage errorMessage={error} />;

  return (
    <div className='App'>
      <main>
        <Section className='cards' title='Список карточек'>
          <Button
            className={filterBtnClasses}
            clickHandler={onFilterCards}
          >
            Только с лайками
          </Button>
          <CardsListContainer />
        </Section>
      </main >
    </div>
  );
}

export default App;