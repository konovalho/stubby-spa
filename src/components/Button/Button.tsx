import React from 'react';
import * as S from './Button.styled';

import { MarginProps } from 'styled-system';

type Props = {
  type?: 'button' | 'reset' | 'submit';
  disabled: boolean;
  children: React.ReactNode;
} & MarginProps;

const Button = ({ children, type = 'button', ...rest }: Props) => (
  <S.Root {...rest} type={type}>
    {children}
  </S.Root>
);

export default Button;
