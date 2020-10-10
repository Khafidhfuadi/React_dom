import React from "react";
import { withRouter } from "react-router-dom";

const GoBack = (props) => {
  const RedirectHandle = () => {
    console.log("goback", props);
    props.history.push("/");
  };

  const goBackHandle = () => {
    props.history.goBack();
  };

  const goForwardHandle = () => {
    props.history.goForward();
  };
  return (
    <React.Fragment>
      <div className="container mt-3">
        <button
          className="btn btn-warning btn-sm mr-2"
          onClick={RedirectHandle}
        >
          Redirect
        </button>
        <button
          onClick={goBackHandle}
          className="btn btn-primary btn-sm px-3 mr-2"
        >
          Back
        </button>
        <button
          onClick={goForwardHandle}
          className="btn btn-success btn-sm px-3"
        >
          Go Forward
        </button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(GoBack);
