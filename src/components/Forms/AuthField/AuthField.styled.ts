import styled from 'styled-components';
import { margin } from 'styled-system';

import { Colors } from '@types';

import { textMixin } from 'styles/helpers';

export const Root = styled.div`
  ${margin}
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;

  ${textMixin({
    weight: 'bold',
    size: 13,
    align: 'left',
  })}
`;

export const Input = styled.input<{ disabled: boolean; error: boolean }>`
  width: 100%;
  padding: 10px 13px;
  border: 1px solid ${(p) => (p.error ? Colors.valencia : Colors.alto)};
  border-radius: 5px;
  background: ${(p) => (p.disabled ? Colors.alabaster : 'none')};

  ${textMixin({
    size: 13,
  })}
`;
