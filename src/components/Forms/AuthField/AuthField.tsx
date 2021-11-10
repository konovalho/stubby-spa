import React from 'react';
import { useField } from 'formik';
import { MarginProps } from 'styled-system';

import * as S from './AuthField.styled';

type Props = {
  id?: string;
  name: string;
  placeholder?: string;
  label: string;
  type?: 'password' | 'text';
  disabled?: boolean;
} & MarginProps;

const AuthField = ({
  id,
  name,
  type = 'text',
  disabled = false,
  label,
  ...rest
}: Props) => {
  const [field, { error, touched }] = useField(name);

  return (
    <S.Root {...rest}>
      <S.Label id={id || name}>{label}</S.Label>
      <S.Input
        id={id || name}
        type={type}
        disabled={disabled}
        error={touched && error !== undefined}
        {...field}
      />
    </S.Root>
  );
};

export default AuthField;
