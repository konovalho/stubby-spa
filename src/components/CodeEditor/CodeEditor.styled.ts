import styled from 'styled-components';
import {
  margin,
  size,
  width,
  height,
  WidthProps,
  HeightProps,
} from 'styled-system';

import { Colors } from '@types';

export const Root = styled.div<WidthProps & HeightProps>`
  ${size}
  ${width}
  ${height}
`;

export const Editor = styled.div<WidthProps & HeightProps>`
  position: absolute;
  padding: 10px;
  border: 1px solid ${Colors.alto};
  border-radius: 5px;

  & .ace_content {
    padding: 10px;
  }

  ${margin}
  ${width}
  ${height}
`;
