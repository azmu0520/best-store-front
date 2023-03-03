import React from "react";
import { Wrap, AntForm } from "../Login/style";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import useRequest from "../../hooks/useRequest";
import { NavLink, useNavigate } from "react-router-dom";
import { message } from "antd";
const Register = () => {
  const { request } = useRequest();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      await request({
        url: "/api/auth/register",
        method: "POST",
        body: values,
        includeToken: false,
      }).then((res) => {
        res?.status === "success" && navigate("/login");
      });
    } catch (error) {
      message.error("Something went wrong");
    }
  };
  return (
    <Wrap>
      <Wrap.Container>
        <AntForm onFinish={handleSubmit}>
          <Wrap.Title>Manager Register</Wrap.Title>
          <Wrap.Label>Enter your first name</Wrap.Label>
          <AntForm.Item
            name="first_name"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Wrap.Input />
          </AntForm.Item>
          <Wrap.Label>Enter your last name</Wrap.Label>
          <AntForm.Item
            name="last_name"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Wrap.Input />
          </AntForm.Item>
          <Wrap.Label>Enter your email</Wrap.Label>
          <AntForm.Item
            name="email"
            type="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Wrap.Input />
          </AntForm.Item>
          <Wrap.Label>Enter your password</Wrap.Label>
          <AntForm.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Wrap.PasswordInput style={{ background: "transparent" }} />
          </AntForm.Item>
          <Wrap.Submit type="submit">
            <Wrap.LoginIcon /> Create Account
          </Wrap.Submit>
          <Wrap.Regsiter>
            <NavLink to="/login"> Sign in</NavLink>
          </Wrap.Regsiter>
        </AntForm>
      </Wrap.Container>
    </Wrap>
  );
};

export default Register;
