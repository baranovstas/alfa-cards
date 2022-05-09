import { useSelector, useDispatch } from 'react-redux';

import Button from '../button/Button';
import Section from '../../layouts/Section';
import ErrorMessage from '../errorMessage/ErrorMessage';
import CardsListContainer from '../../containers/CardsListContainer';

import { toggleFilter } from '../../reducers/cardsSlice';

import filterStyles from '../../assets/styles/Filter.module.scss';
import '../../assets/styles/styles.scss';

function App() {
  const dispatch = useDispatch();

  const error = useSelector(({ cards: { error } }) => error);

  const isFilteredByLikes = useSelector(
    ({ cards: { isFilteredByLikes } }) => isFilteredByLikes
  );

  const { filter, filter_active } = filterStyles;

  const filterBtnClasses = isFilteredByLikes ?
    `${filter} ${filter_active}` :
    filter;

  const onFilterCards = () => dispatch(toggleFilter());

  if (error) return <ErrorMessage errorMessage={error} />;

  return (
    <div className='App'>
      <main>
        <h1 className='visually-hidden'>
          Тестовое задание на junior frontend-разработчика в Альфа-банк
        </h1>
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