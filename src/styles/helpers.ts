import { css } from 'styled-components';

import { Colors, TextProps, FontWeights } from '@types';

export const textMixin = ({
  size = 20,
  textTransform = 'none',
  align = 'left',
  weight = 'normal',
  color = 'black',
  textDecoration = 'none',
}: TextProps) => css`
  ${`font-size: ${typeof size === 'number' ? `${size}px` : size}`};
  ${`text-align: ${align}`};
  ${`font-weight: ${FontWeights[weight]}`};
  ${`color: ${Colors[color]}`};
  ${`text-decoration: ${textDecoration}`};
  ${`text-transform: ${textTransform}`};
`;
