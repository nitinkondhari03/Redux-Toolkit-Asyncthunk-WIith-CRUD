import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./user/userDetailSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
