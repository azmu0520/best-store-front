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
  margin-top: 2%;
  border-bottom: 2px solid #fafafb;
  padding-left: 2%;
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
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  white-space: nowrap;
  line-height: 24px;
  padding-left: ${(padding) => (padding ? `30px` : `0`)};
  color: #262626;
`;
export const DollorWrap = styled.div`
  font-family: Proxima Nova;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  padding-left: 30px;
  color: #262626;

  opacity: 0.5;
`;

export const UserIcon = styled(User)`
  width: 20px;
  height: 20px;
  padding-right: 5px;
  color: #22262a;
`;
export const SearchIcon = styled(Search)`
  width: 21px;
  padding-left: 5px;
  color: #22262a;
  height: 21px;
  opacity: 1;
`;
export const KarzinkaIcon = styled(Karzinka)`
  width: 24px;
  padding-right: 5px;
  color: #22262a;

  height: 24px;
`;

export const Arrow = styled(ArrowDwn)`
  width: 7px;
  height: 4px;
  padding-left: 2%;
  color: #22262a;
  cursor: pointer;
`;

ChooseWrap.Item = styled.div`
  font-family: Proxima Nova;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #262626;
`;
