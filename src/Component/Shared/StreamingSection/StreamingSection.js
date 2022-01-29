import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import MoviesApi from "../../../Common/API/MoviesApi";
import { MoviesApiKey } from "../../../Common/API/MoviesApiKey";
import { handleMoviesError } from "../../../Features/movieSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const StreamingSection = ({ search, title, type, data, storeData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMoviesData = async () => {
      const response = await MoviesApi.get(
        `?apikey=${MoviesApiKey}&s=${search}&type=${type}`
      ).catch((error) => dispatch(handleMoviesError(error)));
      dispatch(storeData(response.data));
    };
    fetchMoviesData();
  }, []);

  const settings = {
    dots: false,
    nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="md:mx-14 mx-4 movies-section py-12">
      <div>
        <h2 className="text-2xl text-black mb-12 uppercase font-semibold border border-0 border-b-2 border-gray-800">
          {title}
        </h2>
        <Slider {...settings}>
          {data.Search?.map((item) => (
            <div key={item.imdbID}>
              <div className="movies-poseter text-center">
                <img
                  className="h-full text-center mx-auto"
                  src={item.Poster}
                  alt=""
                />
              </div>
              <div className="ml-2 text-center">
                <h2 className="text-xl font-semibold my-2">{item.Title}</h2>
                <Link
                  to={`/home/${item.imdbID}`}
                  className="bg-gray-800 text-white font-semibold px-4 py-1"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default StreamingSection;
