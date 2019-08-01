import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import axiosWithAuth from "../helpers/axiosWithAuth";

function AddFriend({ touched, errors }) {
  return (
    <AddFriendsWrapper>
      <Form>
        <div className="form-group">
          <Field
            className="input"
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <Field
            className="input"
            name="age"
            type="text"
            placeholder="Age"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <Field
            className="input"
            name="email"
            type="text"
            placeholder="Email"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <button className="btn">Submit</button>
        </div>
      </Form>
      <div className="error-group">
        <div className="error-message">{touched.name && errors.name}</div>
        <div className="error-message" />
        <div className="error-message">{touched.email && errors.email}</div>
      </div>
    </AddFriendsWrapper>
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
      .required("Name is required.")
      .min(2, "Name is required."),
    age: Yup.string(),
    email: Yup.string()
      .required("Email is required.")
      .email("Email is not valid.")
  }),

  handleSubmit(values, formikBag) {
    console.log(values);
    axiosWithAuth()
      .post("/api/friends", values)
      .then(res => {
        formikBag.props.updateFriends(res.data);
        formikBag.resetForm();
        formikBag.setSubmitting();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(AddFriend);

const AddFriendsWrapper = styled.div`
  /* form {
    display: flex;
    justify-content: space-between;
  }

  .error-group {
    display: flex;
  } */
`;
