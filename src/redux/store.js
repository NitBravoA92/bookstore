import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./books/bookSlice";

const store = configureStore({
  reducer: {
    books: bookSlice,
  },
});

export default store;
