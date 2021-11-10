import React from 'react';
import { MarginProps } from 'styled-system';

import * as S from './Projects.styled';

type Props = MarginProps;

const Projects = ({ ...rest }: Props) => (
  <S.Root {...rest}>
    <S.Header>Projects</S.Header>
    <S.List>
      <S.Item>
        <S.Circle color="valencia" />
        My first test project
      </S.Item>
      <S.Item>
        <S.Circle color="black" />
        Some another project
      </S.Item>
      <S.Item>
        <S.Circle color="doveGray" />
        New project
      </S.Item>
    </S.List>
  </S.Root>
);

export default Projects;
