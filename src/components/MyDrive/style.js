import styled, { css } from "styled-components";

const center = css`
  display: flex;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
  height: 100%;
  background-color: ${({ theme }) => theme.sidebar_body};
  box-shadow: 0px 5px 20px rgb(0 0 0 / 10%);
  border-radius: 5px;
  overflow: hidden;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  flex: 1;
  background: ${({ theme }) => theme.main_bg};

  a {
    ${center}
    width: 100%;
    height: 40px;
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    font-weight: 400;
    padding: 12px 35px 12px 35px;
    margin: 8px 0;
  }

  .active,
  a:hover {
    background: ${({ theme }) => theme.bg};
  }
`;

Sidebar.Logo = styled.h1`
  font-size: 38px;
  color: ${({ theme }) => theme.text};
  padding: 40px 0px 20px 35px;
  border-bottom: ${({ theme }) => `1px solid ${theme.bg}`}; ;
`;

Wrap.Outlet = styled.div`
  flex: 4.5;
  height: 87vh;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;
