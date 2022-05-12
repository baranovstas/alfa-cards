import { useSelector } from 'react-redux';

import Header from '../../layouts/Header/Header';
import Section from '../../layouts/Section/Section';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import CoffeeListContainer from '../../containers/CoffeeListContainer';

import '../../assets/styles/styles.scss';

function App() {
  const error = useSelector(({ coffee: { error } }) => error);

  if (error) return <ErrorMessage errorMessage={error} />;

  return (
    <div className='App'>
      <Header />
      <main>
        <Section className='hero' title='Список кофе'>
          <CoffeeListContainer />
        </Section>
      </main >
    </div>
  );
}

export default App;