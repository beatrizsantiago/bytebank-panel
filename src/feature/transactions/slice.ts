import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactionsList: (state, action) => {
      state.list = action.payload;
    },
    addTransaction: (state, action) => {
      state.list.push({
        ...action.payload,
      });
    },
  },
});

export const { addTransaction, setTransactionsList } = transactionsSlice.actions;

export default transactionsSlice.reducer;
