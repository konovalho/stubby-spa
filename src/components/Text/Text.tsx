import React from 'react';

import { ColorsStrings } from '@types';

import {
  FlexboxProps,
  MarginProps,
  PaddingProps,
  LayoutProps,
  PositionProps,
  FontSizeProps,
  LineHeightProps,
  TypographyProps,
} from 'styled-system';

import * as Styled from './Text.styled';

type Props = {
  children: React.ReactNode;
  cursor?: 'pointer' | 'default';
  color?: ColorsStrings;
  onClick?: () => void;
  as?: keyof JSX.IntrinsicElements;
} & FlexboxProps &
  PositionProps &
  MarginProps &
  PaddingProps &
  LayoutProps &
  FontSizeProps &
  LineHeightProps &
  TypographyProps;

const Text = ({
  children,
  as = 'div',
  cursor = 'default',
  color = 'black',
  ...rest
}: Props) => (
  // @ts-ignore
  <Styled.Root cursor={cursor} as={as} color={color} {...rest}>
    {children}
  </Styled.Root>
);

export default Text;
