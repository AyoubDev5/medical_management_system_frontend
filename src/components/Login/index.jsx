import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import AuthHandl from "../config/AuthHandler";
import Config from "../config/Config";
import { Navigate  } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    loginStatus: 0,
  });
  // const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    data.loginStatus = 1;
    AuthHandl.Login(data.username, data.password,handleAjaxResponse);
  };

  const handleAjaxResponse = (getdata) => {
    console.log(getdata);
    if (getdata.error) {
      data.loginStatus = 4;
    } else {
      data.loginStatus = 3;
      window.location = Config.homeUrl;
    }
  };
  const getMessages = () => {
    if (data.loginStatus === 0) {
      return "";
    } else if (data.loginStatus === 1) {
      return (
        <div className="alert alert-warning">
          <strong>Logging in!</strong> Please Wait...
        </div>
      );
    } else if (data.loginStatus === 3) {
      return (
        <div className="alert alert-success">
          <strong>Login Successful!</strong>
        </div>
      );
    } else if (data.loginStatus === 4) {
      return (
        <div className="alert alert-danger">
          <strong>Invalid Login Details</strong>
        </div>
      );
    }
  };
  if (AuthHandl.loggedIn()) {
    return <Navigate to={Config.homeUrl} />;
  }
  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form
            className={styles.form_container}
            method="POST"
			onSubmit={formSubmit}
          >
            <h1>Admin</h1>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
			<a href="forgot-password.html">Forgot Password?</a>
            <button type="submit" className={styles.green_btn} >
              Sing In
            </button>
          </form>
		  <div className="col-xs-12">{getMessages()}</div>
        </div>
        <div className={styles.right}>
          <h1>New Account</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
