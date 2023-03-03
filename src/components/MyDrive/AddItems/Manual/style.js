import styled, { css } from "styled-components";
import { Select, Form } from "antd";
import { ReactComponent as Cover } from "../../../../assets/icons/cover.svg";
import { ReactComponent as Export } from "../../../../assets/icons/export.svg";

const { Option } = Select;
const color = css`
  color: ${({ theme }) => theme.text};
`;

const center = css`
  display: flex;
  align-items: center;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

Wrap.Export = styled(Export)`
  path {
    fill: ${({ theme }) => theme.text};
  }
`;
Wrap.Form = styled(Form)``;
Wrap.Option = styled(Option)``;
Wrap.Footer = styled.div`
  ${center}
  padding: 20px 40px;
  position: sticky;
  bottom: 0;
  background: ${({ theme }) => theme.main_bg};
  width: 100%;
  left: 0;
  z-index: 10;
  border-radius: 5px;
`;

Wrap.Submit = styled.input`
  padding: 10px 30px;
  background-color: #0096b5;
  border: none;
  outline: none;
  color: #fefefe;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

Wrap.Title = styled.h3`
  font-size: 24px;
  ${color}
  margin-top: 10px;
  margin-bottom: 0.5rem;
`;

Wrap.AntSelect = styled(Select)`
  width: 100%;
  margin-top: 1rem;
  .ant-select-selector,
  .ant-select-open .ant-select-selection-item {
    background: transparent !important;
    color: ${({ theme }) => theme.text};
  }
  .ant-select-dropdown {
    background-color: transparent !important;
  }
  .anticon-close span svg {
    path {
      fill: red !important;
    }
  }
  margin-bottom: 0.5rem;
`;

Wrap.Label = styled.span`
  font-size: 0.8125rem;
  font-style: italic;
  ${color}
`;

Wrap.Checkbox = styled.input``;

Wrap.Label = styled.label`
  margin-top: 1rem;
  color: ${({ theme }) => theme.dark_text};

  font-size: 13px;
  font-weight: 400;
`;

export const CustomFields = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

CustomFields.Title = styled.h3`
  font-size: 15px;
  font-weight: 400;
  ${color}
`;

CustomFields.Item = styled(Wrap.Form.Item)`
  display: flex;
  flex-direction: column;
  width: 100%;
  p {
    color: ${({ theme }) => theme.text} !important;
  }
`;

Wrap.Input = styled.input`
  border: 1px solid #dedede;
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  width: 100%;
  height: 2.4375rem;
  margin: 0 0 1rem;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgb(10 10 10 / 10%);
  font-size: 15px;
  outline: none;
  padding: 0.5rem;
  ${color}
  ::-webkit-calendar-picker-indicator {
    filter: ${({ theme }) => `invert(${theme.icon})`};
  }
`;

Wrap.TextArea = styled.textarea`
  border: 1px solid #dedede;
  outline: none;
  background-color: transparent;
  height: 200px;
  padding: 0.5rem;
  border-radius: 4px;
  width: 100%;
  ${color}
  margin: 0 0 1rem;
`;

Wrap.ImageLabel = styled.label`
  ${center}
  width: fit-content;
  padding: 10px 20px;
  background: ${({ theme }) => theme.main_bg};
  border-radius: 5px;
  ${color}
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

Wrap.CoverIcon = styled(Cover)`
  margin-right: 5px;
  path {
    stroke: ${({ theme }) => theme.text};
  }
`;
