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
    // лучше пустой массив
    cardsData: [],
    likedCards: [],
    isFetching: false,
    isFetched: false,
    isFilteredByLikes: false,
    // null не нужно менять тип данных у переменных
    error: null,
  },

  reducers: {
    // id вместо payload
    deleteCard(state, { payload }) {
      const { cardsData, likedCards } = state;

      state.cardsData = cardsData.filter(
        card => card.id !== payload
      );
      state.likedCards = likedCards.filter(
        cardId => cardId !== payload
      );
    },

    // непонятно, что такое payload, лучше дать ему название { payload: id }
    // likeOrDislikeCard, toggleLikeCard
    likeCard(state, { payload: id }) {
      const { likedCards } = state;

      if (likedCards.includes(id)) {
        state.likedCards = likedCards.filter(
          cardId => cardId !== id
        );
      }
      else {
        state.likedCards.push(id);
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
          // is fetching
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
  // unused
  setCards,
  setFetched,
  setError,
  deleteCard,
  likeCard,
  toggleFilter
} = actions;
