/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import styled from 'styled-components';
import { margin } from 'styled-system';

import { textMixin } from 'styles/helpers';

import { Colors } from '@types';

const searchIcon = require('assets/icons/search.svg');

export const Root = styled.div`
  width: 198px;
  display: block;
  position: relative;

  ${margin}
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  border-radius: 3px;
  background: ${Colors.white};

  &::placeholder {
    color: ${Colors.doveGray};
  }

  ${textMixin({
    size: 12,
  })}
`;

export const SearchIcon = styled(searchIcon)`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translate(0, -50%);
`;
