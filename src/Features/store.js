import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import watchListReducer from "./watchListSlice";

export default configureStore({
  reducer: {
    userStatus: userReducer,
    movieStatus: movieReducer,
    watchListStatus: watchListReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
