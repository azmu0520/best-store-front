import styled, { css } from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as Global } from "../../assets/icons/global.svg";
import { ReactComponent as ArrowD } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as Best } from "../../assets/icons/Best.svg";
import { ReactComponent as Store } from "../../assets/icons/Store.svg";

const center = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  ${center}
  background-color: ${({ theme }) => theme.bg};
  height: 73px;
  width: 100%;
  position: fixed;
  z-index: 11;
  border-bottom: ${({ theme }) => theme.text};
`;
export const Icon = styled.div``;

Icon.Logo1 = styled(Best)`
  width: 6.125em;
  margin-right: 5px;
  path {
    fill: ${({ theme }) => theme.logo1};
  }
`;
Icon.Logo2 = styled(Store)`
  width: 7.125em;
  path {
    fill: ${({ theme }) => theme.logo2};
  }
`;
export const Btn = styled.button`
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 14px;
  font-family: "Roboto-Medium";
  font-weight: 500;
  margin: 0 20px;

  ${center}
`;

export const Wrap = styled.div`
  ${center}
  justify-content: space-between;
  max-width: 1345px;
  width: 100%;
  margin: 0 auto;
`;

Wrap.Outlet = styled.div`
  max-width: 1445px;
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;
`;

Wrap.Container = styled.div`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.main_bg};
  height: 100vh;
`;
Wrap.Images = styled.div`
  ${center}
`;

Wrap.Links = styled.ul`
  ${center}
`;

export const Search = styled.form`
  ${center}
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  height: 42px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition-delay: 0s;
  transition-duration: 0.2s;
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 525px;
`;

Search.Input = styled.input`
  padding: 10px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  display: block;
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  white-space: nowrap;
  outline: none;
  width: 100%;
  /* border: 1px solid white; */
`;
Search.Btn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 46px;
`;
Icon.Search = styled(SearchIcon)`
  fill: #555;
`;

export const Controllers = styled.div`
  ${center}
`;

Icon.Lang = styled(Global)`
  fill: ${({ theme }) => theme.text};
`;

Wrap.Language = styled.div`
  ${center}
  color: var(--gray);
  font-size: 18px;
  margin: 5px 15px 15px 0;
`;

Wrap.LangImage = styled.img`
  width: 40px;
  height: 20px;
  margin-right: 15px;
`;

export const Profile = styled.div`
  ${center}

  .btn-user {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.second_bg};
    border-color: #cecece;
    padding: 6px 11px 5px 4px;
    font-weight: 500;
    font-size: 15px;
    box-shadow: 0 0 2px 0 rgb(0 0 0 / 20%), 0 0 0 0 rgb(0 0 0 / 19%);
    border-radius: 23px;
  }
`;

Profile.User = styled.div`
  ${center}
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
`;
Profile.Image = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 0 9px;
`;

Icon.Arrow = styled(ArrowD)`
  width: 20px;
  height: 25px;
  fill: ${({ theme }) => theme.text};
`;

Profile.Modal = styled.div`
  ${center}
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  justify-content: center;
  cursor: pointer;
  .dropper .ant-dropdown-menu {
    background-color: red !important;
  }
`;
