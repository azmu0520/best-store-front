import React from "react";
import { Wrap } from "./style";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import useRequest from "../../hooks/useRequest";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/Auth";

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
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(3, "Password should be of minimum 3 characters length")
              .required("Required"),
            email: Yup.string()
              .email("Enter a valid email")
              .required("Required"),
          })}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Wrap.Form onSubmit={formik.handleSubmit}>
              <Wrap.Title>Manager Login</Wrap.Title>
              <Wrap.Label>Enter your Email</Wrap.Label>
              <Wrap.Input
                type="text"
                autoComplete="current-email"
                name="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <p style={{ color: "red", fontSize: "12px" }}>Email {msg}</p>
                )}
              </ErrorMessage>
              <Wrap.Label>Enter your Password</Wrap.Label>
              <Wrap.Input
                type="password"
                autoComplete="current-password"
                name="password"
                placeholder="password"
                {...formik.getFieldProps("password")}
              />
              <ErrorMessage name="password">
                {(msg) => (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    Password {msg}
                  </p>
                )}
              </ErrorMessage>

              <Wrap.Submit type="submit">
                <Wrap.LoginIcon /> Sign in
              </Wrap.Submit>
              <Wrap.Regsiter>
                <NavLink to="/register"> Create Account</NavLink>
              </Wrap.Regsiter>
            </Wrap.Form>
          )}
        </Formik>
      </Wrap.Container>
    </Wrap>
  );
};

export default Login;
