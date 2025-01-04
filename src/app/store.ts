import { configureStore } from "@reduxjs/toolkit";
import accountReducer from '../feature/account/slice';
import transactionTypesReducer from '../feature/transactionTypes/slice';
import transactionsReducer from '../feature/transactions/slice';

const store = configureStore({
  reducer: {
    account: accountReducer,
    transactionTypes: transactionTypesReducer,
    transactions: transactionsReducer,
  },
});

export default store;
