import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./layout";
import ProtectedRoute from "../Page/Component/ProtectedRoute";

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/admin" component={Layout} />
        <Redirect from="/" to="/admin/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Index;
