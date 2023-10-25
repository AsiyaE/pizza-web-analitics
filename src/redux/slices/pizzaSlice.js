import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  // верхний фильтр работает только по названию пицц
  const host='652e773e0b8d8ddac0b16d6b';

  const { sortBy, order, category, search } = params;
  const { data } = await axios.get(
    `https://${host}.mockapi.io/items?&limit=8&sortBy=${sortBy}&order=${order}&${(search)?search:category}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading', // loading |success | error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })

      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })

      .addCase(fetchPizzas.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const selectPizzaData = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
