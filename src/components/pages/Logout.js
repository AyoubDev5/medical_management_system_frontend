import React from "react";
import { Navigate } from "react-router-dom";
import AuthHandler from "../config/AuthHandler";

class Logout extends React.Component {
  render() {
    AuthHandler.logoutUser();
    return <Navigate to="/" />;
  }
}
export default Logout;