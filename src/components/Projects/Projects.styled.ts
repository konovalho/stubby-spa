/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import styled from 'styled-components';
import { margin } from 'styled-system';

import { ColorsStrings, Colors } from '@types';

import { textMixin } from 'styles/helpers';

export const Root = styled.div`
  width: 198px;
  display: block;
  position: relative;

  ${margin}
`;

export const Header = styled.div`
  margin-bottom: 15px;

  ${textMixin({
    size: 16,
    weight: 'extraBold',
  })}
`;

export const List = styled.ul`
  ${textMixin({
    size: 15,
  })}
`;

export const Item = styled.li`
  position: relative;
  padding-left: 20px;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  ${textMixin({
    size: 14,
  })}
`;

export const Circle = styled.span<{ color: ColorsStrings }>`
  position: absolute;
  width: 8px;
  height: 8px;
  left: 0px;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 50%;
  background: ${(p) => Colors[p.color]};
`;
