import styled from 'styled-components';

import { Colors } from '@types';

import * as header from 'components/Header/Header.styled';

export const Root = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  height: calc(100% - ${header.height}px);
  background: ${Colors.white};
`;

export const Sidebar = styled.div`
  width: 305px;
  padding: 20px;
  background: ${Colors.alabaster};
`;

export const MainContent = styled.div`
  width: 30%;
  background: ${Colors.white};
`;
