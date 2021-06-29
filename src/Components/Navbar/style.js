import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-left: 2%;
`;

export const LogoImg = styled(Logo)`
  width: 134px;

  height: 45px;
`;

export const RightSide = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 10%;

  a {
    font-family: Poppins;

    font-family: Poppins;
    font-style: normal;
    font-weight: 540;
    font-size: 24px;
    line-height: 36px;
    text-decoration: none;
    color: #22262a;
    padding-left: 150px;
  }
`;
