import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  userId: '',
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.id = action.payload.id;
      state.userId = action.payload.userId;
    }
  }
});

export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
