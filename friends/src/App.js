import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";

import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/friends">Manage Friends</Link>
      </nav>
      <main>
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/friends"
          render={props => {
            const token = localStorage.getItem("token");
            if (!token) {
              return <Redirect to="/login" />;
            }
            return <Friends {...props} />;
          }}
        />
      </main>
    </div>
  );
}

export default App;
