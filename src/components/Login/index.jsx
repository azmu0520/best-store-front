import React from "react";
import { Wrap, AntForm } from "./style";
import useRequest from "../../hooks/useRequest";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/Auth";
import { message } from "antd";

const Login = () => {
  const { request } = useRequest();
  const [, dispatch] = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      await request({
        url: "/api/auth/login",
        method: "POST",
        body: values,
        includeToken: false,
      })
        .then((res) => {
          console.log(res);
          if (res?.status === "fail") {
            message.error(res?.message);
          }
          if (res?.token) {
            dispatch({ type: "login", payload: res?.token });
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err, "ee");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrap>
      <Wrap.Container>
        <AntForm onFinish={handleSubmit} autoComplete="on">
          <Wrap.Title>Manager Login</Wrap.Title>
          <Wrap.Label>Enter your Email</Wrap.Label>
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
          <Wrap.Label>Enter your Password</Wrap.Label>
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
            <Wrap.LoginIcon /> Sign in
          </Wrap.Submit>
          <Wrap.Regsiter>
            <NavLink to="/register"> Create Account</NavLink>
          </Wrap.Regsiter>
        </AntForm>
      </Wrap.Container>
    </Wrap>
  );
};

export default Login;
