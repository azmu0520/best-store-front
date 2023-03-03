import styled, { css } from "styled-components";
import { ReactComponent as LoginIcon } from "../../assets/icons/login.svg";
import { Form, Input, Button } from "antd";
const center = css`
  display: flex;
  align-items: center;
`;
export const Wrap = styled.div`
  max-width: 628px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  ${center}
  justify-content: center;
  margin: auto;
`;
Wrap.Container = styled.div`
  border: 1px solid #fff;
  border-color: ${({ theme }) => theme.bg};
  line-height: 36px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.bg};
  padding: 36px;
  font-size: 16px;
  border-radius: 10px;
`;

Wrap.Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
  color: #12a70c;
`;

export const AntForm = styled(Form)`
  width: 400px;
`;
Wrap.Submit = styled.button`
  ${center}
  color: #fff;
  background-color: #007bff;
  /* border-color: #007bff; */
  padding: 0.4rem 1rem;
  font-size: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 20px auto 0 auto;
`;

Wrap.LoginIcon = styled(LoginIcon)`
  width: 1.3rem;
  fill: #fff;
  margin-right: 5px;
`;
Wrap.Label = styled.label`
  color: #999;
  font-size: 11px;
  text-transform: uppercase;
`;

Wrap.Input = styled(Input)`
  background: transparent !important;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  height: 38px;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.text};
  :-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.text} !important;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active,
  :-internal-autofill-selected,
  :-internal-autofill-previewed {
    -webkit-box-shadow: ${({ theme }) =>
      `0 0 0 30px ${theme.bg} inset`} !important;
  }
`;

Wrap.PasswordInput = styled(Input.Password)`
  .ant-input-affix-wrapper .ant-input-password {
    background-color: transparent !important;
  }
  .anticon svg {
    color: ${({ theme }) => theme.text} !important;
  }
`;

Wrap.Regsiter = styled.div`
  width: fit-content;
  margin: 0 auto;
  color: #007bff;
  background-color: transparent;
  background-image: none;
  border: 1px solid #007bff;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  margin-top: 20px;
`;
