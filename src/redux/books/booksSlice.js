import { createSlice } from '@reduxjs/toolkit';

// Slice state for books
export const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

// Export the reducers of the books slice
export const { addBook, removeBook } = booksSlice.actions;
