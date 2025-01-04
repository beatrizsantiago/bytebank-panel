import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
