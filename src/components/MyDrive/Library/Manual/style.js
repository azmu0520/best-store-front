import styled, { css } from 'styled-components';
import { Select } from 'antd';
export const Wrap = styled.div``;

const color = css`
  color: ${({ theme }) => theme.text};
`;

Wrap.Title = styled.h3`
  font-size: 24px;
  ${color}
  margin-top: .5rem;
`;

Wrap.AntSelect = styled(Select)`
  width: 100%;
  margin: 1rem 0;
  .ant-select-selector,
  .ant-select-open .ant-select-selection-item {
    background: transparent !important;
    color: ${({ theme }) => theme.text};
  }
  .ant-select-dropdown {
    background-color: transparent !important;
  }
`;

Wrap.Label = styled.span`
  font-size: 0.8125rem;
  font-style: italic;
  ${color}
`;

Wrap.TypeCheckBoxes = styled.div`
  display: flex;
  align-items: center;
`;

Wrap.Checkbox = styled.input``;

Wrap.Label = styled.label`
  margin-left: 0.5rem;
  margin-right: 1rem;
  ${color}
  font-size: 15px;
  font-weight: 400;
`;
