import { combineReducers } from '@reduxjs/toolkit';

import cards from '../reducers/cardsSlice';

const rootReducer = combineReducers({ cards });

export default rootReducer;