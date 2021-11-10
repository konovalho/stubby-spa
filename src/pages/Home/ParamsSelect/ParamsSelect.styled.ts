import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';

import { textMixin } from 'styles/helpers';

export const Root = styled.div<MarginProps>`
  ${margin}

  & div[class$="container"] {
    ${textMixin({
      size: 13,
    })}
  }
`;
