import React from "react";
import { Input, Button } from "../../Page/Property/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-7"></div>
          <div className="col-5">
            <h4>Selamat Datang!</h4>
            <form>
              <Input label={"Email Address"} className="form-control" />
              <Input label={"Password"} className="form-control" />
              <Button
                label={"Login"}
                className="form-control btn btn-success"
              />
            </form>
            <div className="row mt-3">
              <div className="col">
                <Link to="/register">
                  <p className="d-flex justify-content-end">Register</p>
                </Link>
              </div>
              <div className="col">
                <Link to="/about">
                  <p className="d-flex justify-content-start">About</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
