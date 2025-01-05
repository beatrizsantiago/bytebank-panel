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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
