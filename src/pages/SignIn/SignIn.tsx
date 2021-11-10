import React from 'react';
import { Formik } from 'formik';

import { Routes, FontWeights } from '@types';
import { SignInPayload } from 'models/user/types';
import { signInErrorSelector } from 'models/user/selectors';

import Button from 'components/Button';
import AuthField from 'components/Forms/AuthField';
import Logo from 'components/Logo';
import Text from 'components/Text';

import _isEmpty from 'lodash/isEmpty';

import * as S from './SignIn.styled';

type Props = {
  onSignIn: (payload: SignInPayload) => void;
  signInError: ReturnType<typeof signInErrorSelector>;
};

const SignIn = ({ onSignIn, signInError }: Props) => {
  return (
    <S.Root>
      <Formik onSubmit={onSignIn} initialValues={{ email: '', password: '' }}>
        {({ isValid, touched }) => (
          <S.Form>
            <Logo mb={20} />
            <AuthField label="Email" name="email" type="text" mb={10} />
            <AuthField
              label="Password"
              name="password"
              type="password"
              mb={20}
            />
            {signInError && (
              <Text
                fontWeight={FontWeights.bold}
                fontSize={12}
                mb={20}
                color="valencia"
              >
                {signInError}
              </Text>
            )}
            <Button
              type="submit"
              disabled={!isValid && !_isEmpty(touched)}
              mb={10}
            >
              Sign in
            </Button>
            <S.SignUpLink to={Routes.signUp}>
              or sign up for stubbyAPI
            </S.SignUpLink>
          </S.Form>
        )}
      </Formik>
    </S.Root>
  );
};

export default SignIn;
