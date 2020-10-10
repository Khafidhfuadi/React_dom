import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import GoBack from "../HOC/goBack";

const Corona = () => {
  let match = useRouteMatch();
  return (
    <React.Fragment>
      <div className="container text-center">
        <h3>Data Corona</h3>
        <ol className="btn">
          <li>
            <NavLink activeClassName="menu-active" to={`${match.url}/positif`}>
              Positif
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="menu-active" to={`${match.url}/sembuh`}>
              Sembuh
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="menu-active"
              to={`${match.url}/meninggal`}
            >
              Meninggal
            </NavLink>
          </li>
        </ol>
        <Switch>
          <Route path="/corona/positif">
            <h2>Positif</h2>
          </Route>
          <Route path="/corona/sembuh">
            <h2>sembuh</h2>
          </Route>
          <Route path="/corona/meninggal">
            <h2>meninggal</h2>
          </Route>
        </Switch>
        <GoBack />
      </div>
    </React.Fragment>
  );
};

export default Corona;
