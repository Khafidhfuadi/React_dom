import { useParams, Link } from "react-router-dom";
import React from "react";
import Axios from "axios";
import Navbar from "../../Page/Navbar";
import { config } from "../../config";

const DetailUser = (props) => {
  let { id } = useParams();
  let [user, setUser] = React.useState([]);

  React.useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () => {
    try {
      let response = await Axios.get(`${config.api_host}/users/${id}`);
      setUser(response.data.data);
      console.log(response.data.data);
    } catch {
      console.log("error");
    }
  };

  const NextHandle = () => {
    let nextId = parseInt(id, 10) + 1;
    props.history.push(`/DetailUser/${nextId}`);
    console.log(nextId);
  };

  const PreviousHandle = () => {
    let nextId = parseInt(id, 10) - 1;
    props.history.push(`/DetailUser/${nextId}`);
    console.log(nextId);
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mt-4 col-5">
        <div class="card bg-light">
          <h5 class="card-header">Detail User {user.first_name}</h5>
          <div class="card-body">
            <div className="row">
              <div className="col-3">
                <img
                  className="rounded-circle"
                  width="90"
                  src={user.avatar}
                  alt=""
                />
              </div>
              <div className="col-9 mt-2">
                <p class="card-text">
                  <h4>
                    {user.first_name} {user.last_name}
                  </h4>
                  <h5>{user.email}</h5>
                </p>
                <div className="mt-3 d-flex justify-content-end">
                  <button
                    disabled={id < 2}
                    onClick={PreviousHandle}
                    type="button"
                    class="btn btn-warning mr-2 text-white"
                  >
                    Previous
                  </button>
                  <button
                    disabled={id > 14}
                    onClick={NextHandle}
                    type="button"
                    class="btn btn-primary mr-2"
                  >
                    Next
                  </button>
                  <Link to="/">
                    <button type="button" class="btn btn-danger">
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailUser;
