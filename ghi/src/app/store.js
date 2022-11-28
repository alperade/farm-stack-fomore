import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { itineraryApi } from "./itineraryApi";
import { yelpApi } from "./yelpApi";
import { searchSlice } from "./searchSlice";
// import { accountSlice } from './accountSlice';

export const store = configureStore({
  reducer: {
    [itineraryApi.reducerPath]: itineraryApi.reducer,
    [yelpApi.reducerPath]: yelpApi.reducer,
    //[accountSlice.name]: accountSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(itineraryApi.middleware)
      .concat(yelpApi.middleware);
  },
});

setupListeners(store.dispatch);
