/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import styled from 'styled-components';

import { Colors } from '@types';

export const height = 44;

export const Root = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${height}px;
  padding: 0 20px;
  background: ${Colors.valencia};
`;
