import styled from 'styled-components';
import {
  layout,
  margin,
  padding,
  flexbox,
  position,
  typography,
} from 'styled-system';

import { ColorsStrings, Colors } from '@types';

export const Root = styled.div<{
  cursor: 'pointer' | 'default';
  color: ColorsStrings;
}>`
  position: static;
  cursor: ${(p) => p.cursor};
  color: ${(p) => Colors[p.color]};

  ${flexbox}
  ${layout}
  ${margin}
  ${padding}
  ${position}
  ${typography}
`;
