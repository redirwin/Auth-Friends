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
        <Link to="/login">Login</Link>
        <Link to="/protected/friends">Manage Friends</Link>
      </nav>
      <main>
        <Route
          exact
          path="/login"
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
