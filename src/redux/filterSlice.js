import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  // slice name
  name: 'filter',
  // initial state of reducer
  initialState: filterInitialState,
  // reducers
  reducers: {
    setContactsFilter(state, action) {
      return action.payload;
    },
  },
});

// action generator
export const { setContactsFilter } = filterSlice.actions;
// slice's reducer
export const filterReducer = filterSlice.reducer;
