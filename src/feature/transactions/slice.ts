import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITransactionData, ITransactionsState } from "./types";

const initialState:ITransactionsState = {
  list: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactionsList: (state, action: PayloadAction<ITransactionData[]>) => {
      state.list = action.payload;
    },
    addTransaction: (state, action: PayloadAction<ITransactionData>) => {
      state.list.push({
        ...action.payload,
      });
    },
  },
});

export const { addTransaction, setTransactionsList } = transactionsSlice.actions;

export default transactionsSlice.reducer;
