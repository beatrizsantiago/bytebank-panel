import { createSlice } from "@reduxjs/toolkit";

import { ITransactionTypesState } from "./types";

const initialState:ITransactionTypesState = {
  list: [
    'Debit',
    'Credit',
  ],
};

const transactionTypeSlice = createSlice({
  name: 'transactionTypes',
  initialState,
  reducers: {}
});

export default transactionTypeSlice.reducer;
