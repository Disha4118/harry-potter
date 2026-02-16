import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Slice";
import spellReducer from "./SpellSlice";

/**
 * Redux store configuration
 * Combines multiple reducers to manage different parts of application state:
 * - books: manages Harry Potter books data
 * - spell: manages spells data with pagination
 */
const store = configureStore({
  reducer: {
    books: booksReducer,
    spell: spellReducer
  },
});

export default store;