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
      .min(2)
      .required(),
    age: Yup.string().min(1).required,
    email: Yup.string().min(3).required
  }),

  handleSubmit(values, formikBag) {
    console.log(values);
    axiosWithAuth()
      .post("/api/friends", values)
      .then(res => {
        formikBag.props.updateFriends(res.data);
        formikBag.resetForm();
        formikBag.setSubmitting(<div>Submitting...</div>);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(AddFriend);

const AddFriendsWrapper = styled.div`
  div {
    display: inline-block;
  }
`;
