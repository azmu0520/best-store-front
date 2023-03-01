import styled, { css } from "styled-components";
import { ReactComponent as Like } from "../../../assets/icons/like.svg";
import { ReactComponent as Comment } from "../../../assets/icons/comment.svg";
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
`;

Wrap.Like = styled(Like)`
  width: 20px;
  /* fill: white; */
  path {
    fill: ${({ like, theme }) => (like ? theme.text : "transparent")};
    stroke: ${({ theme }) => theme.text};
    /* fill: ${({ theme }) => theme.text}; */
  }
  stroke: #22272f;

  margin-right: 2px;
`;
Wrap.Comment = styled(Comment)``;
