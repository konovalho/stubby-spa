import React from 'react';
import { MarginProps } from 'styled-system';

import * as S from './Search.styled';

type Props = MarginProps;

const Search = ({ ...rest }: Props) => (
  <S.Root {...rest}>
    {/* <S.SearchIcon /> */}
    <S.Input placeholder="Search..." />
  </S.Root>
);

export default Search;
