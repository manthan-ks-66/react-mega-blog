import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import "./App.css";
import Test from "./components/test";

function App() {
  // const [loading, setLoading] = useState(true);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   authService
  //     .getCurrentUser()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(login(userData));
  //       } else {
  //         dispatch(logout());
  //       }
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  // });

  // return !loading ? (
  //   <>
  //     <div>Welcome to blog app</div>

  //   </>
  // ) : null;

  return (
    <>
      <Test />
    </>
  );
}

export default App;
