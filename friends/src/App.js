import React from "react";
import { Route, Link } from "react-router-dom";
import PrivateRoute from "./helpers/PrivateRoute";

import Login from "./components/Login";
import Friends from "./components/Friends";

import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <div>
          <Link to="/protected/friends">Manage Friends</Link>
          <Link to="/">Login</Link>
        </div>
      </nav>
      <main>
        <Route
          exact
          path="/"
          render={props => {
            return <Login {...props} />;
          }}
        />
        <PrivateRoute exact path="/protected/friends" component={Friends} />
      </main>
    </div>
  );
}

export default App;
