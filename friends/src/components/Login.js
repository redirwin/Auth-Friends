import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Login({ touched, errors }) {
  const token = localStorage.getItem("token");

  if (toke) {
    return <Redirect to="/friends" />;
  }

  return (
    <Form>
      <label>Username</label>
      <Field
        className="input"
        name="username"
        type="username"
        autocomplete="off"
      />
    </Form>
  );
}
