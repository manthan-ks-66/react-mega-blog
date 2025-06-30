import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function LogutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    // logutUser (appwrite) returns a promise so we need to handle it hence inside the .then we are updating the store
    authService
      .logoutUser()
      .then(() => dispatch(logout()))
      .catch((error) => console.log("Error in logoutHandler: ", error));
  };
  return (
    <button className="rounded-xl bg-green-500"
      onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogutBtn;
