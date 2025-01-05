import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAccount, IAccountState } from "./types";

const initialState: IAccountState = {
  id: '',
  userId: '',
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<IAccount>) => {
      state.id = action.payload.id;
      state.userId = action.payload.userId;
    }
  }
});

export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
