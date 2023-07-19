import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import formattedBookObject from '../../helpers/dataApiFormatted';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nDPnstGPzILIpnHls05G/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios(`${baseURL}`);
    return response.data || [];
  } catch (error) {
    return 'Something went wrong. Try again refreshing the page.';
  }
});

const initialState = {
  books: [],
  isLoading: true,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // reducer for fetchBooks action
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;

        if (typeof action.payload === 'string') {
          state.error = action.payload;
          return;
        }

        const formattedDataBooks = Object.keys(action.payload)
          .map((key) => formattedBookObject(action.payload[key], key));
        state.books = [...formattedDataBooks];
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
