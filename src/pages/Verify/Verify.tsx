import React from 'react';
import { Formik } from 'formik';

import Button from 'components/Button';
import AuthField from 'components/Forms/AuthField';
import Logo from 'components/Logo';
import Text from 'components/Text';

import { VerifyPayload } from 'models/user/types';

import _isEmpty from 'lodash/isEmpty';

import * as S from './Verify.styled';

type Props = {
  onVerify: (payload: VerifyPayload) => void;
};

const Verify = ({ onVerify }: Props) => {
  return (
    <S.Root>
      <Formik
        onSubmit={onVerify}
        initialValues={{
          email: localStorage.getItem('confirm-email') || '',
          confirmationCode: '',
        }}
      >
        {({ isValid, touched }) => (
          <S.Form>
            <Logo mb={20} />
            <AuthField
              disabled
              label="Email"
              name="email"
              type="text"
              mb={20}
            />
            <AuthField
              label="Confirmation code"
              name="confirmationCode"
              type="text"
              mb={20}
            />
            <Button
              type="submit"
              disabled={!isValid && !_isEmpty(touched)}
              mb={20}
            >
              Confirm your email address
            </Button>
            <Text fontSize={13} textAlign="center">
              Please, check your email address <br /> for the confirmation code
            </Text>
          </S.Form>
        )}
      </Formik>
    </S.Root>
  );
};

export default Verify;
