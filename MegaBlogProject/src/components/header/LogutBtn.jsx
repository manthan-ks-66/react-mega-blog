import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function LogutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logoutUser()
      .then(() => dispatch(logout()))
      .catch((error) => console.log("Logout error: ", error));
  };
  return <button onClick={logoutHandler}>Logout</button>;
}

export default LogutBtn;
