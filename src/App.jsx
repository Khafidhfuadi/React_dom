import React from "react";
import "./styles.css";
import Navbar from "./Page/Navbar";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import About from "./Page/About";
import DetailUser from "./Page/DetailUser";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./Page/Component/ProtectedRoute";
import ProtectedLogin from "./Page/Component/ProtectedLogin";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Corona from "./Page/Corona";
import NotFound from "./Page/NotFound";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/">
            <Navbar>
              <Home />
            </Navbar>
          </ProtectedRoute>
          <Route path="/about">
            <Navbar>
              <About />
            </Navbar>
          </Route>
          <Route path="/contact">
            <Navbar>
              <Contact />
            </Navbar>
          </Route>
          <Route path="/corona">
            <Navbar>
              <Corona />
            </Navbar>
          </Route>
          <Route path="/DetailUser/:id" component={DetailUser} />
          <ProtectedLogin path="/login" component={Login} />
          <ProtectedLogin path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
