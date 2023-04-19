import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './Slices/filterSlice';
import { contactsApi } from './Slices/contactsSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
