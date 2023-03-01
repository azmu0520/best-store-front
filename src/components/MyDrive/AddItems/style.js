import styled from "styled-components";
import { Tabs } from "antd";

export const Wrap = styled.div`
  width: 100%;
  padding: 40px 50px 0 40px;
  background-color: transparent;
`;

Wrap.Title = styled.span`
  font-size: 40px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 40px;
`;

Wrap.AntTabs = styled(Tabs)`
  color: ${({ theme }) => theme.text} !important;
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.text} !important;
  }
  .ant-tabs-tab:hover {
    color: ${({ theme }) => theme.text} !important;
  }
`;
