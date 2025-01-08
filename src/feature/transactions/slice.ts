import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IEditedTransactionData, ITransactionData, ITransactionsState } from "./types";

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
    editTransaction: (state, action: PayloadAction<IEditedTransactionData>) => {
      const index = state.list.findIndex((transaction) => transaction.id === action.payload.id);
      state.list[index] = {
        ...state.list[index],
        type: action.payload.type,
        value: action.payload.value
      };
    }
  },
});

export const { addTransaction, setTransactionsList, editTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
