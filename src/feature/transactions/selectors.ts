import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { ITransactionData } from "./types";

export const currentBalance = createSelector(
  (state: RootState) => state.transactions.list,
  (transactions: ITransactionData[]) => transactions.reduce((acc, transaction) => acc + transaction.value, 0),
);
