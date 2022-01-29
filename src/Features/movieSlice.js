import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieData: [],
    seriesData: [],
    episodeData: [],
    error: "",
  },
  reducers: {
    handleMoviesData: (state, action) => {
      state.movieData = action.payload;
    },
    handleSeriesData: (state, action) => {
      state.seriesData = action.payload;
    },
    handleEpisodeData: (state, action) => {
      state.episodeData = action.payload;
    },
    handleMoviesError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  handleMoviesData,
  handleMoviesError,
  handleSeriesData,
  handleEpisodeData,
} = movieSlice.actions;

export const moviesData = (state) => state.movieStatus.movieData;
export const seriesData = (state) => state.movieStatus.seriesData;
export const episodeData = (state) => state.movieStatus.episodeData;
export const moviesErros = (state) => state.movieStatus.error;

export default movieSlice.reducer;
