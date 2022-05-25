import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import * as axios from 'axios';

const fetchCardsData = createAsyncThunk(
  'cards/fetchCardsData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/photos?_page=1'
      );
      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
)

const cardsSlice = createSlice({
  name: 'cards',

  initialState: {
    cardsData: null,
    likedCards: [],
    isFetched: false,
    isFilteredByLikes: false,
    error: false,
  },

  reducers: {
    deleteCard(state, { payload }) {
      const { cardsData, likedCards } = state;

      state.cardsData = cardsData.filter(
        card => card.id !== payload
      );
      state.likedCards = likedCards.filter(
        cardId => cardId !== payload
      );
    },

    likeCard(state, { payload }) {
      const { likedCards } = state;

      if (likedCards.includes(payload)) {
        state.likedCards = likedCards.filter(
          cardId => cardId !== payload
        );
      }
      else {
        state.likedCards.push(payload);
      }
    },

    toggleFilter(state) {
      const { isFilteredByLikes } = state;
      state.isFilteredByLikes = !isFilteredByLikes;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(
        fetchCardsData.fulfilled,
        (state, { payload }) => {
          state.cardsData = payload;
          state.isFetched = true
        }
      )
      .addCase(
        fetchCardsData.rejected,
        (state, { payload }) => {
          state.error = payload;
        }
      )
  }
});

const { actions, reducer } = cardsSlice;

export default reducer;
export { fetchCardsData };
export const {
  setCards,
  setFetched,
  setError,
  deleteCard,
  likeCard,
  toggleFilter
} = actions;