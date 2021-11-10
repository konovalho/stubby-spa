import styled from 'styled-components';
import { margin } from 'styled-system';

import { Colors } from '@types';

import { textMixin } from 'styles/helpers';

export const Root = styled.button<{ disabled: boolean }>`
  width: 100%;
  padding: 15px 0;
  border-radius: 5px;
  cursor: pointer;
  background: ${(p) => (p.disabled ? Colors.alto : Colors.valencia)};
  color: ${Colors.white};

  ${textMixin({
    align: 'center',
    size: 13,
    weight: 'bold',
    color: 'white',
  })}

  ${margin}
`;
