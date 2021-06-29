import styled from "styled-components";
import { ReactComponent as ArrowDwn } from "../../assets/icons/arrow-dwn.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Karzinka } from "../../assets/icons/karzinka.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  width: 100%;
  height: 45px;
  margin-top: 1%;
  border-bottom: 2px solid #fafafb;
`;
export const ChooseWrap = styled.div`
  display: flex;
`;
export const LeftSide = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-right: 4%;
  margin-left: auto;
`;
export const ItemWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  white-space: nowrap;
  line-height: 16px;
  padding-left: ${(padding) => (padding ? `30px` : `0`)};
  color: #262626;
`;
export const UserIcon = styled(User)`
  width: 15px;
  height: 15px;
  padding-right: 5px;
`;
export const SearchIcon = styled(Search)`
  width: 16px;
  padding-left: 5px;
  height: 16px;
`;
export const KarzinkaIcon = styled(Karzinka)`
  width: 20px;
  padding-right: 5px;

  height: 20px;
`;

export const Arrow = styled(ArrowDwn)`
  width: 7px;
  height: 4px;
  padding-left: 2%;
  cursor: pointer;
`;

ChooseWrap.Item = styled.div`
  font-family: Proxima Nova;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding-left: 10px;
  color: #262626;
`;
