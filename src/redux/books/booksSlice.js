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

export const postBook = createAsyncThunk('books/addBook', async (newBook) => {
  try {
    const response = await axios.post(API, newBook);
    return response.data;
  } catch (error) {
    throw new error;
  }
});

export const deleteBooks = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    const response = await axios.delete(API + `/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Could not be deleted');
  }
})

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
      state.books[action.payload.item_id] = [action.payload];
    },
    removeBook: (state, action) => {
      const itemIdToRemove = action.payload;
      const updatedBooks = { ...state.books };
      delete updatedBooks[itemIdToRemove];
      state.books = updatedBooks;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        // Update the books state with the data received from the API
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, () => {
        // Handle the error if the API call fails
        // You can update the state or display an error message here
        throw new Error('Failed to load books');
      })
  },
});

// Export the reducers of the books slice
export const { addBook, removeBook } = booksSlice.actions;
