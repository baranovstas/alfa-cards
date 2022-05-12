import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';
import Spinner from '../components/Spinner/Spinner';
import CoffeeList from '../components/СoffeeList/CoffeeList';
import Notification from '../components/Notification/Notification';

import { fetchCoffeeData } from '../reducers/coffeeSlice';
import { selectCoffee } from '../selectors/coffeeSelectors';

function CoffeeListContainer() {
  const dispatch = useDispatch();

  const content = useSelector(state => selectCoffee(state));

  // const coffeeData = useSelector(
  //   ({ coffee: { coffeeData } }) => isFetched
  // );

  useEffect(() => {
    dispatch(fetchCoffeeData());
  }, [dispatch]);

  if (!content) return <Spinner />;
  // if (coffeeData.length === 0) return <Notification />;;

  return <Grid container spacing={2.5}>{content}</Grid>;
  // return <CoffeeList coffee={content} />;
}

export default CoffeeListContainer;