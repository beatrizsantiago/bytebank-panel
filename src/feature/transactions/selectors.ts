import { createSelector } from "@reduxjs/toolkit";

export const transactionsList = createSelector(
  (state) => state.transactions.list,
  (transactions) => {
    return transactions.map((transaction) => ({
      ...transaction,
      date: new Date(transaction.date),
    }))
  },
);

export const currentBalance = createSelector(
  (state) => state.transactions.list,
  (transactions) => transactions.reduce((acc, transaction) => acc + transaction.value, 0),
);
