import styled, { css } from "styled-components";
import { FileUploader } from "react-drag-drop-files";

const center = css`
  display: flex;
  align-items: center;
`;

export const Wrap = styled.form`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  padding: 40px;
`;

Wrap.Title = styled.span`
  font-size: 40px;
  color: ${({ theme }) => theme.text};
`;

export const Uploader = styled(FileUploader)`
  label {
    border: none !important;
  }
`;

Wrap.SubTitle = styled.span`
  font-size: 24px;
  margin: 30px 0 15px 0;
`;

Wrap.Input = styled.input`
  width: 100%;
  height: 2.5rem;
  margin: 0 0 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #dedede;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};

  ::placeholder {
    opacity: 0.8;
  }
`;

Wrap.DropZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 40px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  :focus {
    border-color: #2196f3;
  }
`;

Wrap.TypeCheckBoxes = styled.div`
  ${center}
  label {
    font-size: 15px;
    font-weight: 500;
    margin-left: 0.5rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`;
Wrap.Checkbox = styled.input``;

Wrap.Label = styled.label`
  margin-top: 1rem;
  font-size: 13px;
  font-weight: 400;
`;

Wrap.TextArea = styled.textarea`
  width: 100%;
  height: 5rem;
  margin: 0 0 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #dedede;
  color: ${({ theme }) => theme.text};
  outline: none;
  background-color: transparent;
  ::placeholder {
    opacity: 0.8;
  }
`;

Wrap.Submit = styled.input`
  border-radius: 5px;
  padding: 10px 30px;
  background-color: #4bc1d2;
  color: #fefefe;
  outline: none;
  border: none;
  width: fit-content;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
`;
