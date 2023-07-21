import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { booksSlice } from './books/booksSlice';
import { categoriesSlice } from './categories/categoriesSlice';

// Combine the reducers
const rootReducer = combineReducers({
  books: booksSlice.reducer,
  categories: categoriesSlice.reducer,
});

// Config the redux store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
