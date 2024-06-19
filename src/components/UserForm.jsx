import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { signUpUser } from "../helpers/userAxios";

const initialState = [
  {
    fName: null,
    email: null,
    phone: null,
    password: null,
    confirmPassword: null,
  },
];

export const UserForm = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return window.alert("password do not match");
    }
    const userData = await signUpUser(rest);
    console.log(userData);
  };
  return (
    <>
      <div
        className=" bg-danger d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Form onSubmit={handleOnSubmit}>
          <h1>User Registration form</h1>
          <hr />
          <Form.Group className="mb-3 text-center">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fName"
              required
              placeholder="Enter First and Last Name"
              className="form-control-lg"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Enter email"
              className="form-control-lg"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              placeholder="Enter Your Phone Number"
              className="form-control-lg"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              placeholder="Password"
              className="form-control-lg"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm Password"
              className="form-control-lg"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            className="d-flex justify-content-center align-items-center form-control-lg"
          >
            <Button type="submit">Submit Form</Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};
