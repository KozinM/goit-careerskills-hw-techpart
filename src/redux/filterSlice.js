import { createSlice } from '@reduxjs/toolkit';
import { usersFilters } from './constants';

const filterInitialState = usersFilters.all;

const filterSlice = createSlice({
  // slice name
  name: 'filter',
  // initial state of reducer
  initialState: filterInitialState,
  // reducers
  reducers: {
    setUsersFilter(state, action) {
      return action.payload;
    },
  },
});

// action generator
export const { setUsersFilter } = filterSlice.actions;
// slice's reducer
export const filterReducer = filterSlice.reducer;
