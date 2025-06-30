import { login as storeLogin } from "../store/authSlice";
import authService from "../appwrite/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  async function onLogin() {
    try {
      setError("");

      const session = await authService.loginUser(data);

      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(storeLogin(userData));
          navigate("/");
        } else {
          setError("User not found");
        }
      }
    } catch (error) {
      setError(error.message);
      console.log("Error in login: ", error);
    }
  }

  return (
    <>
      {" "}
      <div>Login page</div>
    </>
  );
}

export default Login;
