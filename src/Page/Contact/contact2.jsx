import React from "react";
import WithHOC from "../HOC/withHOC";

const Contact2 = (props) => {
  console.log(props);
  const { count, name, setCount } = props;
  return (
    <React.Fragment>
      <div className="container mt-3">
        <h5>{count}</h5>
        <button className="btn btn-sm btn-warning" onClick={setCount}>
          Klik saya
        </button>
        <h2>{name}</h2>
      </div>
    </React.Fragment>
  );
};

export default WithHOC(Contact2, 100);
