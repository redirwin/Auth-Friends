import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import { axiosWithAuth } from "../helpers/axiosWithAuth";
import { Redirect } from "react-router-dom";

function Login({ touched, errors }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/friends" />;
  }

  return (
    <Form>
      <label>Username</label>
      <div className="form-group">
        <Field
          className="input"
          name="username"
          type="username"
          autocomplete="off"
        />
        <p className="error-message">{touched.username && errors.username}</p>
      </div>
      <div className="form-group">
        <Field
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
        <p className="error-message">{touched.password && errors.password}</p>
      </div>
      <button className="btn">Submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(8)
      .required(),
    password: Yup.string().min(8).required
  }),

  handleSubmit(values, formkBag) {
    const url = "http://localhost:5000/api/login";
    axios
      .post(url, values)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch(e => {
        console.log(e.response.data);
      });
  }
})(Login);
