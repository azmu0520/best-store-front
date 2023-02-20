import React from 'react';
import { Wrap } from '../Login/style';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useRequest from '../../hooks/useRequest';
import { NavLink, useNavigate } from 'react-router-dom';
import { message } from 'antd';
const Register = () => {
  const { request } = useRequest();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await request({
        url: '/api/auth/register',
        method: 'POST',
        body: values,
        includeToken: false,
      }).then((res) => {
        res?.status === 'success' && navigate('/login');
      });
    } catch (error) {
      message.error('Something went wrong');
    }
  };
  return (
    <Wrap>
      <Wrap.Container>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(6, 'Password should be of minimum 6 characters length')
              .required('Required'),
            email: Yup.string()
              .email('Enter a valid email')
              .required('Required'),
          })}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Wrap.Form onSubmit={formik.handleSubmit}>
              <Wrap.Title>Manager Register</Wrap.Title>
              <Wrap.Label>Enter your first name</Wrap.Label>
              <Wrap.Input
                type='text'
                autoComplete='current-name'
                name='first_name'
                placeholder='First Name'
                {...formik.getFieldProps('first_name')}
              />
              <Wrap.Label>Enter your last name</Wrap.Label>
              <Wrap.Input
                type='text'
                autoComplete='current-last-name'
                name='last_name'
                placeholder='Last Name'
                {...formik.getFieldProps('last_name')}
              />
              <Wrap.Label>Enter your email</Wrap.Label>
              <Wrap.Input
                type='text'
                autoComplete='current-email'
                name='email'
                placeholder='Email'
                {...formik.getFieldProps('email')}
              />
              <ErrorMessage name='email'>
                {(msg) => (
                  <p style={{ color: 'red', fontSize: '12px' }}>Email {msg}</p>
                )}
              </ErrorMessage>
              <Wrap.Label>Enter your password</Wrap.Label>
              <Wrap.Input
                type='password'
                autoComplete='current-password'
                name='password'
                placeholder='password'
                {...formik.getFieldProps('password')}
              />
              <ErrorMessage name='password'>
                {(msg) => (
                  <p style={{ color: 'red', fontSize: '12px' }}>
                    Password {msg}
                  </p>
                )}
              </ErrorMessage>
              <Wrap.Submit type='submit'>
                <Wrap.LoginIcon /> Create Account
              </Wrap.Submit>
              <Wrap.Regsiter>
                <NavLink to='/login'> Sign in</NavLink>
              </Wrap.Regsiter>
            </Wrap.Form>
          )}
        </Formik>
      </Wrap.Container>
    </Wrap>
  );
};

export default Register;
