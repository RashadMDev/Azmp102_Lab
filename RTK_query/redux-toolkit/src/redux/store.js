import { configureStore } from '@reduxjs/toolkit';
import rtkSlice from './rtkSlice';

const store = configureStore({
      reducer: {
            // Add the API slice reducer
            [rtkSlice.reducerPath]: rtkSlice.reducer,
      },
      // Add the API middleware
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(rtkSlice.middleware),
});

export default store;
