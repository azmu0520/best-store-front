import styled, { css } from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

const center = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  padding-top: 100px;
  width: 100%;
`;

export const Wrap = styled.div`
  ${center}
  max-width: 1145px;
  width: 100%;
  margin: 0 auto;
`;
