import React from "react";
import { useSelector } from "react-redux";
import {
  episodeData,
  handleEpisodeData,
  handleMoviesData,
  handleSeriesData,
  moviesData,
  seriesData,
} from "../../Features/movieSlice";
import StreamingSection from "../Shared/StreamingSection/StreamingSection";
import HeroSection from "./Compo/HeroSection";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Subscribe from "./Compo/Subscribe";

const Home = () => {
  const movies = useSelector(moviesData);
  const series = useSelector(seriesData);
  const episode = useSelector(episodeData);

  return (
    <>
      <HeroSection />
      <StreamingSection
        search="comedy"
        type="movie"
        title="Movies"
        data={movies}
        storeData={handleMoviesData}
      />
      <StreamingSection
        search="action"
        type="series"
        title="Series"
        data={series}
        storeData={handleSeriesData}
      />
      <StreamingSection
        search="adventure"
        type="movie"
        title="Episode"
        data={episode}
        storeData={handleEpisodeData}
      />
      <Subscribe />
    </>
  );
};

export default Home;
