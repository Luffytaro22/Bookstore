import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: 'Under construction',
  reducers: {
    checkStatus: (state) => state,
  },
});

export const { checkStatus } = categoriesSlice.actions;
