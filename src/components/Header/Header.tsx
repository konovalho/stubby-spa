import React from 'react';

import Logo from 'components/Logo';
import Search from 'components/Search';

import * as S from './Header.styled';

const Header = () => (
  <S.Root>
    <Logo color="white" />
    <Search ml={20} />
  </S.Root>
);

export default Header;
