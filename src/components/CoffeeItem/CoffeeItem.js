import { Grid, Typography } from '@mui/material';

import coffeeItemStyles from './CoffeeItem.module.scss';

function CardsItem({ name, origin, notes }) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={4}
    >
      <Typography component='h3'>
        {name}
      </Typography>
      {/* <h3 className={coffeeItemStyles.title}>{name}</h3> */}
      <p className={coffeeItemStyles.origin}>{origin}</p>
      <p className={coffeeItemStyles.notes}>{notes}</p>
    </Grid>
  );
  // return (
  //   <li className={coffeeItemStyles.item}>
  //     <h3 className={coffeeItemStyles.title}>{name}</h3>
  //     <p className={coffeeItemStyles.origin}>{origin}</p>
  //     <p className={coffeeItemStyles.notes}>{notes}</p>
  //   </li>
  // );
}

export default CardsItem;