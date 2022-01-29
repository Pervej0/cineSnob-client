import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleWatchListData,
  watchListData,
} from "../../Features/watchListSlice";

const WatchList = () => {
  const dispatch = useDispatch();
  const watchList = useSelector(watchListData);
  const [isDeleted, setIsDeleted] = useState(false);
  const url =
    "https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  useEffect(() => {
    axios
      .get("http://localhost:5000/watchlist")
      .then((data) => dispatch(handleWatchListData(data.data)));
  }, [isDeleted]);

  console.log(watchList);
  const handleDelete = (id) => {
    const isConfirm = window.confirm("Are sure want to delete this?");
    if (isConfirm) {
      axios
        .delete(`http://localhost:5000/watchlist/${id}`)
        .then(({ data }) => {
          if (data.acknowledged) {
            alert("Successfully Deleted");
            setIsDeleted(true);
          }
        })
        .catch((error) => console.log(error));
    } else {
      return;
    }
  };

  return (
    <>
      <section>
        <div
          className="hero-section"
          style={{
            height: "50vh",
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${url})`,
          }}
        ></div>
        <div className="md:mx-14 mx-4 py-16">
          <h1 className="text-2xl text-center mb-12 font-bold">
            You have <span className="text-green-600">{watchList.length}</span>{" "}
            streaming to watch
          </h1>
          <div className="grid gap-5 md:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {watchList?.map((item) => (
              <div key={item._id}>
                <div className="flex gap-3 items-center">
                  <div>
                    <img width="80" src={item.poster} alt="poster" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-black text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm">Type: {item.type}</p>
                    <p className="text-sm mb-2">{item.year}</p>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-white py-1 px-4 bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WatchList;
