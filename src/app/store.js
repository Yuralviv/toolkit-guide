import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/pokemon";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  // next reducers for example
  // [loginApi.reducerPath]: loginApi.reducer,
  // [usersApi.reducerPath]: usersApi.reducer,
  // [registrationApi.reducerPath]: registrationApi.reducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware()
        .concat(apiSlice.middleware)
        //next middleware
        // .concat(loginApi.middleware)
        // .concat(usersApi.middleware)
        // .concat(registrationApi.middleware),
  });
};
