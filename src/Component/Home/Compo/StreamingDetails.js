import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
// import { set } from "immer/dist/internal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MoviesApiKey } from "../../../Common/API/MoviesApiKey";
import { watchListData } from "../../../Features/watchListSlice";
import Spinner from "../../Shared/Spinner/Spinner";

const StreamingDetails = () => {
  const { posterId } = useParams();
  const url =
    "https://images.unsplash.com/photo-1610292062133-75539afdce90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const [data, setData] = useState({});
  const watchList = useSelector(watchListData);

  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com/?apiKey=${MoviesApiKey}&i=${posterId}&plot=full`
      )
      .then((response) => setData(response.data));
  }, [watchList]);
  console.log(watchList);
  // storing in watchlist
  const handleAddToWatchList = () => {
    const bodyData = {
      title: data.Title,
      year: data.Year,
      poster: data.Poster,
      released: data.Released,
      type: data.Type,
    };

    axios
      .post("http://localhost:5000/watchlist", bodyData)
      .then(({ data }) => {
        if (data.acknowledged) alert("Successfully added to watchlist");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
      {!data && <Spinner />}
      <div
        className="hero-section"
        style={{
          height: "50vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${url}) top`,
        }}
      ></div>
      <div className="md:px-24 px-4 py-8">
        <div className="py-8 grid md:grid-cols-3 grid-cols-1 items-center">
          <div>
            <img src={data.Poster} alt="" />
            <ul className="text-left text-sm">
              <li>Released: {data.Released}</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h1 className="text-2xl text-black font-semibold mb-3">
              {data.Title}
            </h1>
            <p>{data.Plot}</p>
            <ul className="mt-6 mb-4 leading-8">
              <li>
                <span className="font-bold">Director:</span> {data.Director}
              </li>
              <li>
                <span className="font-bold">Writer:</span> {data.Writer}
              </li>
              <li>
                <span className="font-bold">Actor:</span> {data.Actors}
              </li>
              <li>
                <span className="font-bold">Language:</span> {data.Language}
              </li>
              <li>
                <span className="font-bold">Box-Office:</span> {data.BoxOffice}
              </li>
              <li>
                <span className="font-bold">Rating:</span> {data.imdbRating}
              </li>
            </ul>
            <button
              onClick={handleAddToWatchList}
              className="text-white bg-red-700 px-4 py-1"
            >
              Add to Watch List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamingDetails;
