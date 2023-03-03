import styled, { css } from "styled-components";
import { ReactComponent as Edit } from "../../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../../assets/icons/delete.svg";
import { Drawer } from "antd";

const center = css`
  display: flex;
  align-items: center;
`;
const color = css`
  color: ${({ theme }) => theme.text};
`;
export const Wrap = styled.div`
  display: flex;
  padding: 40px;
  ${color}
`;

Wrap.Image = styled.img`
  max-width: 400px;
  width: 100%;
  box-shadow: 8px 8px 15px rgb(0 0 0 / 25%);
  border-radius: 6px;
`;
Wrap.Collection = styled.h3`
  font-size: 22px;
`;

Wrap.Drawer = styled(Drawer)`
  .ant-drawer-wrapper-body {
    background: ${({ theme }) => theme.second_bg} !important;
  }
  .anticon-close svg {
    fill: ${({ theme }) => theme.text};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

Content.Title = styled.h2`
  font-size: 36px;
  padding-top: 20px;
`;

Content.Auther = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  color: #8a8a8a;
`;

Content.CustomItems = styled.div`
  font-size: 14px;
  ${center}
  span {
    opacity: 0.85;
    margin-left: 10px;
  }
`;

Content.Desc = styled.div`
  p {
    font-size: 16px;
  }
  margin-top: 30px;
`;

Content.Tags = styled.div`
  ${center}
  margin-top: 20px;
  span {
    background: #df6c5e;
    color: white;
    font-weight: 600;
    font-size: 14px;
    border-radius: 4px;
    display: inline-block;
    padding: 4px 8px;
    margin-right: 10px;
    margin-bottom: 10px;
    white-space: nowrap;
    line-height: 1.2rem;
    cursor: pointer;
  }
`;

Wrap.Controllers = styled.div`
  margin-top: auto;
  ${center}

  span {
    ${center}
    margin-right: 20px;
    cursor: pointer;
  }
`;

Wrap.EditIcon = styled(Edit)`
  width: 22px;
  margin-right: 5px;
  path {
    stroke: ${({ theme }) => theme.text};
  }
`;
Wrap.DeleteIcon = styled(Delete)`
  width: 16px;
  margin-right: 5px;
`;

Wrap.NoItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  span {
    font-size: 3rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
  }
  a {
    margin-top: 10px;
    font-size: 1.4rem;
    text-decoration: underline;
  }
`;
