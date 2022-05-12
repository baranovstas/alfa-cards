import { combineReducers } from '@reduxjs/toolkit';

import coffee from '../reducers/coffeeSlice';

const rootReducer = combineReducers({ coffee });

export default rootReducer;