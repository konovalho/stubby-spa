/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import styled from 'styled-components';
import { margin } from 'styled-system';

import { ColorsStrings } from '@types';

import { textMixin } from 'styles/helpers';

export const Root = styled.div<{ color: ColorsStrings }>`
  ${(p) =>
    textMixin({
      color: p.color,
      align: 'left',
      weight: 'extraBold',
    })}

  ${margin};
`;
