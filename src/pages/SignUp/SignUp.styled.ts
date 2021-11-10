/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { Link } from 'react-router-dom';

import { Colors } from '@types';

import { textMixin } from 'styles/helpers';

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 25px;
  border: 1px solid ${Colors.alto};
  border-radius: 8px;
  background: ${Colors.white};
  text-align: center;
`;

export const SignInLink = styled(Link)`
  ${textMixin({
    align: 'center',
    size: 13,
    color: 'valencia',
    weight: 'bold',
    textDecoration: 'underline',
  })}
`;
