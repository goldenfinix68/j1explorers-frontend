import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./user.type";

const initialState: User = {
  firstName: "John",
  lastName: "Sanderson",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFullName: (state, action: PayloadAction<User>) => {
      state = action.payload;
    },
  },
});

export default userSlice;
