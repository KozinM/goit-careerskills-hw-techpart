
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { usersReducer } from './usersSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  filter: filterReducer,
});


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const PersistConfig = {
  key: 'root',
  storage,
  /* whitelist: ['token'], */
};

export const store = configureStore({
  reducer: persistReducer(PersistConfig, rootReducer),
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

