import styled, { css } from "styled-components";
import { Select } from "antd";
export const Wrap = styled.div`
  width: 100%;
  padding: 40px 50px 0 40px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
`;

const center = css`
  display: flex;
  align-items: center;
`;

export const Filters = styled.div`
  ${center}
  width: 100%;
`;

Filters.Wrap = styled.div`
  ${center}
  margin: 0 auto;
`;
Filters.Alphabet = styled.div`
  ${center}
  justify-content: center;
  flex-wrap: wrap;
`;
Filters.Letters = styled.span`
  margin: 9px;
  font-size: 14px;
  display: block;
  cursor: pointer;
  color: ${({ theme, active }) => (active ? "#4BC1D2" : theme.text)};
  font-weight: ${({ active }) => (active ? "bold" : "")};
`;

Filters.Select = styled(Select)`
  .ant-select-selector {
    background: ${({ theme }) => theme.second_bg} !important;
  }
  .ant-select-selection-placeholder,
  .ant-select-selector,
  .ant-select-sellection-item {
    color: ${({ theme }) => theme.text} !important;
  }
  margin-left: 30px;
`;

Wrap.Cards = styled.div`
  margin-top: 50px;
`;
