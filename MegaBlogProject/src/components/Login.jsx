import { login as storeLogin } from "../store/authSlice";
import authService from "../appwrite/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "./Logo";
import { Link } from "react-router-dom";

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
      <div>
        <div className="logo">
          <Logo />
        </div>

        <br />

        <div>
          <h3>Sign in to your account</h3>
          <div className="flex">
            Don't have an account?
            <Link to="/sign-up">Sign up</Link>
          </div>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <br />

        <form onSubmit={handleSubmit(onLogin)} className="mt-8">
          <Input
            label="Email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                pattern: (value) =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                  "Email address must be valid",
              },
            })}
          />

          <br />

          <Input
            label="Password"
            type="password"
            {...register("password", {
              required: true,
              validate: {
                pattern: (value) =>
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                    value
                  ) ||
                  "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
              },
            })}
          />

          <br />

          <button></button>
        </form>
      </div>
    </>
  );
}

export default Login;
