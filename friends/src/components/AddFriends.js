import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

function AddFriend({ touched, errors }) {
  return (
    <Form>
      <div className="form-group">
        <Field
          className="input"
          name="name"
          type="text"
          placeholder="Name"
          autocomplete="off"
        />
        <p className="error-message">{touched.name && errors.name}</p>
      </div>
      <div className="form-group">
        <Field
          className="input"
          name="age"
          type="text"
          placeholder="Age"
          autoComplete="off"
        />
        <p className="error-message">{touched.age && errors.age}</p>
      </div>
      <div className="form-group">
        <Field
          className="input"
          name="email"
          type="text"
          placeholder="Email"
          autoComplete="off"
        />
        <p className="error-message">{touched.email && errors.email}</p>
      </div>
      <div className="form-group">
        <button className="btn">Clear</button>
      </div>
      <div className="form-group">
        <button className="btn">Submit</button>
      </div>
    </Form>
  );
}
export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      age: "",
      email: ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2)
      .required(),
    age: Yup.string().min(1).required,
    email: Yup.string().min(3).required
  }),

  handleSubmit(values, formikBag) {
    console.log(values);
  }
})(AddFriend);
