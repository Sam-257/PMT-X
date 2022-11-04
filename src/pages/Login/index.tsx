import React, { useState } from "react";
import classes from "./index.jss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const styles = classes();

  const userAPI = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/me`, {
        headers: {
          authorization: sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        sessionStorage.setItem("role", response.data.type);
        sessionStorage.setItem("id", response.data.id);
        sessionStorage.setItem("name", response.data.name);

        if (response.data.type.toUpperCase() === "EMP") {
          navigate("/employee");
        } else {
          navigate("/manager");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginAPI = () => {
    if (loginForm.email === "" || loginForm.password === "") {
      if (loginForm.email === "")
        setLoginErrors((prevErrors) => {
          return { ...prevErrors, email: "Email is required." };
        });
      if (loginForm.password === "")
        setLoginErrors((prevErrors) => {
          return { ...prevErrors, password: "Password is required." };
        });
      return;
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/signin`, loginForm, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
        },
      })
      .then((response) => {
        toast.success("Logged In Successfully", {
          toastId: "success",
        });
        sessionStorage.setItem("token", response.data);
        userAPI();
      })
      .catch((error) => {
        toast.error("Incorrect credentials", {
          toastId: "failure",
        });
      });
  };

  const handleChange = (e: any) => {
    setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
    e.target.value === ""
      ? e.target.id === "email"
        ? setLoginErrors({
            ...loginErrors,
            [e.target.id]: `Email is required.`,
          })
        : setLoginErrors({
            ...loginErrors,
            [e.target.id]: `Password is required.`,
          })
      : setLoginErrors({ ...loginErrors, [e.target.id]: "" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <p className={styles.logo}>PMT-X</p>
        </div>
        <div className={styles.form}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your Email"
            onChange={handleChange}
            value={loginForm.email}
          />
          <span>{loginErrors.email}</span>
          <label htmlFor="password">Password</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your Password"
              onChange={handleChange}
              value={loginForm.password}
            />
            {showPassword ? (
              <div
                className={styles.showPassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className="fa fa-eye" />
              </div>
            ) : (
              <div
                className={styles.showPassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className="fa fa-eye-slash" />
              </div>
            )}
          </div>
          <span>{loginErrors.password}</span>
          <div className={styles.buttonWrapper}>
            <button onClick={loginAPI}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
