import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser, IUserState } from "./types";

const initialState: IUserState = {
  id: '',
  username: '',
  email: '',  
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
    }
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
