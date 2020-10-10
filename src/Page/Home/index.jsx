import React from "react";
import Axios from "axios";
import { config } from "../../config";
import { Link } from "react-router-dom";

const Home = () => {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      let response = await Axios.get(`${config.api_host}/users?page=1`);
      setList(response.data.data);
    } catch {
      console.log("error");
    }
  };

  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-responsive table-hover text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Detail</th>
                <th scope="col">Avatar</th>
                <th scope="col">Email</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
              </tr>
            </thead>
            <tbody>
              {list.map((list, index) => (
                <tr key={list.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <Link to={`DetailUser/${list.id}`}>
                      <p className="btn btn-outline border">Detail</p>
                    </Link>
                  </td>
                  <td>
                    <img
                      className="rounded-circle"
                      width="50"
                      src={list.avatar}
                      alt=""
                    />
                  </td>
                  <td>{list.email}</td>
                  <td>{list.first_name}</td>
                  <td>{list.last_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
