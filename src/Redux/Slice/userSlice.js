
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDate: [{ Login: "admin", password: "admin" }],
    currentUser:null,
  },
  reducers: {
    addNewUser: (state, action) => {
      const newUser = action.payload;
      state.userDate.push({ ...newUser });
    },
    setCurrentUser: (state, action) => {
      const { Login, password,FirstName,LastName,Email } = action.payload;
      state.currentUser = {
        Login: Login || "admin",
        password: password || "admin",
        FirstName:FirstName|| 'admin',
        LastName:LastName|| 'admin',
        Email:Email ||'admin@gmail.com',
      };
    },
    
  },
});

export const { addNewUser, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;

