import { configureStore } from '@reduxjs/toolkit';
import rtkSlice from './rtkSlice';

const store = configureStore({
      reducer: {
            [rtkSlice.reducerPath]: rtkSlice.reducer,
      },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(rtkSlice.middleware),
});

export default store;
