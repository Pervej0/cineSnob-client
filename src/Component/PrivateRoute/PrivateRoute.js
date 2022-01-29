import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import Spinner from "../Shared/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useFirebase();
  console.log(isLoading);
  const location = useLocation();
  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : user ? (
        children
      ) : (
        <Navigate to="/signin" state={{ from: location }} />
      )}
    </>
  );
};

export default PrivateRoute;
