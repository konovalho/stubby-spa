import React from 'react';

import * as S from './AuthLayout.styled';

type Props = { children: React.ReactNode };

const AuthLayout = ({ children }: Props) => <S.Root>{children}</S.Root>;

export default AuthLayout;
