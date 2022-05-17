import React, { Component } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthHandler from "./AuthHandler";

export const PrivateRoute = ({ children:Children }) => {
 if(AuthHandler.loggedIn()){
     return Children
 }
 else{
     return <Navigate to="/" />
 }
};