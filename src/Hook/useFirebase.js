import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleError,
  login,
  logout,
  handleIsLoading,
} from "../Features/userSlice";
import firebaseAuthentication from "../Firebase/firebase.init";

firebaseAuthentication();
const auth = getAuth();
const useFirebase = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userStatus.user);
  const error = useSelector((state) => state.userStatus.error);
  const isLoading = useSelector((state) => state.userStatus.isLoading);

  //   creating a new user
  const manuallySignUp = (email, password, name, location, navigate) => {
    dispatch(handleIsLoading({ isLoading: true }));
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const userInfo = result.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          dispatch(login(userInfo));
          dispatch(handleError(""));
          dispatch(handleIsLoading({ isLoading: false }));
          const destination = location?.state?.form || "/";
          navigate(destination);
        });
      })
      .catch((error) => dispatch(handleError(error.message)));
  };

  // signOut
  const logOut = () => {
    dispatch(handleIsLoading({ isLoading: true }));
    signOut(auth)
      .then(() => {
        dispatch(logout({ user: null }));
        dispatch(handleIsLoading({ isLoading: false }));
      })
      .catch((error) => dispatch(handleError(error.message)));
  };

  const manuallySignIn = (email, password, location, navigate) => {
    dispatch(handleIsLoading({ isLoading: true }));
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const userInfo = result.user;
        dispatch(login(userInfo));
        dispatch(handleError(""));
        dispatch(handleIsLoading({ isLoading: false }));
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => dispatch(handleError(error.message)));
  };

  // state observer
  useEffect(() => {
    dispatch(handleIsLoading({ isLoading: true }));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
        dispatch(handleIsLoading({ isLoading: false }));
      } else {
        dispatch(handleError(""));
        dispatch(handleIsLoading({ isLoading: false }));
      }
    });
  }, []);

  return { manuallySignUp, manuallySignIn, logOut, user, error, isLoading };
};

export default useFirebase;
