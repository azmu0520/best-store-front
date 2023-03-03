import styled, { css } from "styled-components";
import { ReactComponent as Edit } from "../../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../../assets/icons/delete.svg";
import { Drawer } from "antd";
const center = css`
  display: flex;
  align-items: center;
`;

export const Wrap = styled.div`
  ${center}
  height: 100px;
  border: ${({ theme }) => `1px solid ${theme.border}`};
  margin-bottom: 17px;
  padding: 0;
  font-size: 13px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.bg};
`;

Wrap.ImageContainer = styled.div`
  ${center}
  justify-content: center;
  width: 71px;
  height: 98px;
  background: #fff;
`;

Wrap.Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 10;
  border-radius: 3px 0px 0px 3px;
`;

Wrap.Drawer = styled(Drawer)`
  .ant-drawer-wrapper-body {
    background: ${({ theme }) => theme.second_bg} !important;
  }
  .anticon-close svg {
    fill: ${({ theme }) => theme.text};
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
`;

Body.Title = styled.h3`
  ${center}
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  div {
    margin-left: auto;
    cursor: pointer;
  }
  .topic {
    background: #df6c5e;
    color: white;
    font-weight: 600;
    font-size: 12px;
    border-radius: 4px;
    display: inline-block;
    padding: 4px 8px;
    white-space: nowrap;
    margin-left: 40px;
    cursor: pointer;
  }
`;

Body.Desc = styled.p`
  color: #767676;
  font-size: 13px;
  font-weight: 300;
  margin-top: 10px;
`;

Wrap.Footer = styled.div`
  ${center}
  margin-top: auto;
  color: ${({ theme }) => theme.text};
  span {
    ${center}
    margin-right: 20px;
    cursor: pointer;
  }
`;

Wrap.Edit = styled(Edit)`
  width: 20px;
  margin-right: 5px;
  path {
    stroke: ${({ theme }) => theme.text};
  }
  /* fill: white; */
  /* path {
    fill: ${({ like, theme }) => (like ? theme.text : "transparent")};
    stroke: ${({ theme }) => theme.text};
  }
  stroke: #22272f;
  margin-right: 2px; */
`;
Wrap.Delete = styled(Delete)`
  width: 18px;
  margin-right: 5px;
`;
