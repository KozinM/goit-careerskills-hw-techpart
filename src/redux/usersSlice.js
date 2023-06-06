import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';
import { usersFilters } from './constants';

const usersInitialState = {
  items: [],
  isLoading: false,
  error: null,
  fetchedData: false,
};

const usersSlice = createSlice({
  // slice name
  name: 'users',
  // initial state of reducer
  initialState: usersInitialState,
  reducers:{
      userFollowToggle(state, action) {
        for (const user of state.items) {
          if (user.id === action.payload) {
            if (user.status === usersFilters.follow) {
              user.status = usersFilters.followings; 
            } else {
              user.status = usersFilters.follow;
            }
            break;
          }
        }
      },
  },
  extraReducers: {
    [fetchUsers.pending](state) {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      state.fetchedData = true;
    },
    [fetchUsers.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Код редюсеров добавления
/*     [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Код редюсеров удаления
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }, */
  },
});

// slice's reducer
export const usersReducer = usersSlice.reducer;

export const { userFollowToggle } = usersSlice.actions;
