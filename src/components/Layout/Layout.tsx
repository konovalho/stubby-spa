import React from 'react';

import Header from 'components/Header';
import Projects from 'components/Projects';

import * as S from './Layout.styled';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => (
  <S.Root>
    <Header />
    <S.Content>
      <S.Sidebar>
        <Projects />
      </S.Sidebar>
      <S.MainContent>{children}</S.MainContent>
    </S.Content>
  </S.Root>
);

export default Layout;
