import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Slice";
import spellReducer from "./SpellSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    spell: spellReducer
  },
});

export default store;