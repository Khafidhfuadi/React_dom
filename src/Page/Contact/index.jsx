import React from "react";
import Contact1 from "./contact1";
import Contact2 from "./contact2";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container mt-3 text-center">
        <h1>Contact</h1>
        <div className="row">
          <div className="col-6">
            <Contact1 />
          </div>
          <div className="col-6">
            <Contact2 />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
