import { useSelector, useDispatch } from 'react-redux';

import Button from '../button/Button';
import Section from '../../layouts/Section';
import ErrorMessage from '../errorMessage/ErrorMessage';
import CardsListContainer from '../../containers/CardsListContainer';

import { toggleFilter } from '../../reducers/cardsSlice';

import filterStyles from '../../assets/styles/filter.module.scss';
import '../../assets/styles/styles.scss';
import { useEffect, useState } from 'react';

// App положить рядом index.js
// Лучше использовать стрелочные функции
// const App = () => {...}
const App = () => {
  // Лучше использовать useState или useRef
  // проверка св-ва isFilteredByLikes для добавления соответствующего класса кнопке фильтрации, чтобы она подсвечивалась, в случае, если фильтр активен
  const [filterBtnClasses, setFilterBtnClasses] = useState()

  // Используй деструктуризацию
  // const { error, isFilteredByLikes } = useSelector(({ cards }) => cards)
  // Сэкономишь несколько строчек, и вид более понятный
  const { error, isFilteredByLikes } = useSelector(({ cards }) => cards);

  const dispatch = useDispatch(); 
  
  useEffect(() => {
    const { filter, filter_active } = filterStyles;
    setFilterBtnClasses(isFilteredByLikes ? `${filter} ${filter_active}` : filter);
  }, [isFilteredByLikes])

  const onFilterCards = () => dispatch(toggleFilter());

  // Условия в теле функционаального компонента - очень плохая практика

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