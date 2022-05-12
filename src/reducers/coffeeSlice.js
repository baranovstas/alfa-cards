import {
  createSlice, createAsyncThunk
} from '@reduxjs/toolkit';
import * as axios from 'axios';

const fetchCoffeeData = createAsyncThunk(
  'coffee/fetchCoffeeData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://random-data-api.com/api/coffee/random_coffee?size=20'
      );
      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
)

const cardsSlice = createSlice({
  name: 'coffee',

  initialState: {
    coffeeData: null,
    isFetched: false,
    error: false,
  },

  extraReducers(builder) {
    builder
      .addCase(
        fetchCoffeeData.fulfilled,
        (state, { payload }) => {
          state.coffeeData = payload;
          state.isFetched = true
        }
      )
      .addCase(
        fetchCoffeeData.rejected,
        (state, { payload }) => {
          state.error = payload;
        }
      )
  }
});

const { reducer } = cardsSlice;

export default reducer;
export { fetchCoffeeData };