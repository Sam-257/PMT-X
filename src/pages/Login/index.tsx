import React, { useState } from "react";
import classes from "./Login.jss";
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
  const styles = classes();
  
  const userAPI =()=>{
    axios.get('/me', {headers: {
      'authorization': sessionStorage.getItem('token')
    }})
    .then((response)=>{
      sessionStorage.setItem('role', response.data.type);
      sessionStorage.setItem('id', response.data.id);
      sessionStorage.setItem('name', response.data.name);

      if(response.data.type.toUpperCase() === 'EMP'){
        navigate('/employee');
      }
      else{
        navigate('/manager');
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const loginAPI = () => {
    axios
      .post(`/signin`, loginForm, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
        },
      })
      .then((response) => {
        toast.success("Logged In Successfully");
        sessionStorage.setItem('token', response.data);
        userAPI();
      })
      .catch((error) => {
        toast.error("Incorrect credentials");
      });
  };

  const handleChange = (e: any) => {
    setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
    e.target.value === ""
      ? setLoginErrors({
          ...loginErrors,
          [e.target.id]: `${e.target.id} is required.`,
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
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your Email"
            onChange={handleChange}
          />
          <span>{loginErrors.email}</span>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            onChange={handleChange}
          />
          <span>{loginErrors.password}</span>
          <div className={styles.buttonWrapper}>
            <button onClick={loginAPI}>
              {" "}
              Login{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
