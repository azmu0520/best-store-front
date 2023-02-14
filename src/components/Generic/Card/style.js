import styled, { css } from 'styled-components';

const center = css`
  display: flex;
  align-items: center;
`;

export const Wrap = styled.tr`
  height: 100px;
  background: #fff;
  margin-bottom: 17px;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  padding: 0;
  font-size: 13px;
  border-radius: 3px;
`;

Wrap.Td = styled.td`
  ${center}
`;

Wrap.Image = styled.img`
  z-index: 10;
  border-radius: 3px 0px 0px 3px;
  width: 71px;
  height: 100%;
`;

Wrap.Body = styled.div`
  display: flex;
  flex-direction: column;
`;
