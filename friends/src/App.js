import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";

import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
      <main>
        <Route exact path="/login" component={Login} />
      </main>
    </div>
  );
}

export default App;
