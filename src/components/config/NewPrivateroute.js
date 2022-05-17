import React, { Component } from "react";
import { Route, Navigate } from "react-router-dom";
import Maincomponents from "../Maincomponents";
import AuthHandler from "./AuthHandler";

export const NewPrivateRoute = ({ children:Children,activepage}) => {
 if(AuthHandler.loggedIn()){
     return <Maincomponents element={Children} activepage={activepage} />
 }
 else{
     return <Navigate to="/" />
 }
};