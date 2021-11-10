import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { SignUpPayload } from 'models/user/types';
import { signUpErrorSelector } from 'models/user/selectors';
import { Routes, FontWeights } from '@types';

import Button from 'components/Button';
import AuthField from 'components/Forms/AuthField';
import Logo from 'components/Logo';
import Text from 'components/Text';

import _isEmpty from 'lodash/isEmpty';

import { password } from 'utils/regexps';

import * as S from './SignUp.styled';

type Props = {
  onSignUp: (payload: SignUpPayload) => void;
  signUpError: ReturnType<typeof signUpErrorSelector>;
};

const SignUp = ({ onSignUp, signUpError }: Props) => {
  return (
    <S.Root>
      <Formik
        onSubmit={onSignUp}
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          password: Yup.string().required().matches(password),
        })}
      >
        {({ isValid, touched }) => (
          <S.Form>
            <Logo mb={20} />
            <AuthField label="Email" name="email" type="text" mb={10} />
            <AuthField
              label="Password"
              name="password"
              type="password"
              mb={10}
            />
            <Text fontSize={12} mb={20} color="doveGray">
              Should contain one digit, one upper case, one lower case. At least
              8 characters
            </Text>
            {signUpError && (
              <Text
                fontWeight={FontWeights.bold}
                fontSize={12}
                mb={20}
                color="valencia"
              >
                {signUpError}
              </Text>
            )}
            <Button
              type="submit"
              disabled={!isValid && !_isEmpty(touched)}
              mb={10}
            >
              Sign up with email address
            </Button>
            <S.SignInLink to={Routes.signIn}>
              or sign in with existing credentials
            </S.SignInLink>
          </S.Form>
        )}
      </Formik>
    </S.Root>
  );
};

export default SignUp;
