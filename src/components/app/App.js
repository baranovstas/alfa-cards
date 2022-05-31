import { useSelector, useDispatch } from 'react-redux';

import Button from '../button/Button';
import Section from '../../layouts/Section';
import ErrorMessage from '../errorMessage/ErrorMessage';
import CardsListContainer from '../../containers/CardsListContainer';

import { toggleFilter } from '../../reducers/cardsSlice';

import { filter, filter_active } from '../../assets/styles/filter.module.scss';
import '../../assets/styles/styles.scss';

const FilterButton = ({ isActive, onFilterCards }) => {
  const filterBtnClasses = isActive ?
    `${filter} ${filter_active}` :
    filter;

  return (
    <Button
      className={filterBtnClasses}
      onClick={onFilterCards}
    >
      Только с лайками
    </Button>
  )
}

function App() {
  const dispatch = useDispatch();

  // вынести в файл с селекторами
  const error = useSelector(selectCardsError);
  // const error = useSelector(({ cards: { error } }) => error);

  // вынести в файл с селекторами
  const isFilteredByLikes = useSelector(
    ({ cards: { isFilteredByLikes } }) => isFilteredByLikes
  );

  // проверка св-ва isFilteredByLikes для добавления соответствующего класса кнопке фильтрации, чтобы она подсвечивалась, в случае, если фильтр активен
  // можно использовать библиотеку типа cn
  const filterBtnClasses = isFilteredByLikes ?
    `${filter} ${filter_active}` :
    filter;

  const onFilterCards = () => dispatch(toggleFilter());

  if (error) {
    return <ErrorMessage errorMessage={error} />;
  }

  return (
    // Класс можно перенести в main
    // добавить <Provider>, <Layout>, <MainPage>
    <div className='App'>
      <main>
        {/* вынести в тайтл */}
        <h1 className='visually-hidden'>
          Тестовое задание на junior frontend-разработчика в Альфа-банк
        </h1>
        <Section className='cards' title='Список карточек'>
          <FilterButton
            isActive={isFilteredByLikes}
            onClick={onFilterCards}
          />
          <CardsListContainer />
        </Section>
      </main >
    </div>
  );
}

export default App;
