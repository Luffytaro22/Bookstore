import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TX8iwq20220LLJx1zevB/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    throw new error;
  }
});

// Slice state for books
export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: {
      item1: [
        {
          title: 'Game',
          author: 'Nobody',
          category: 'Fiction',
        },
      ]
    },
  },
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        // Update the books state with the data received from the API
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        // Handle the error if the API call fails
        // You can update the state or display an error message here
        throw new action.error;
      });
  },
});

// Export the reducers of the books slice
export const { addBook, removeBook } = booksSlice.actions;
