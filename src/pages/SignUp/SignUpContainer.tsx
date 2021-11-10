import React from 'react';

import SignUp from './SignUp';

import * as thunks from 'models/user/thunks';
import { signUpErrorSelector } from 'models/user/selectors';
import { useThunkWithPayload } from 'hooks/useAction';
import { useSelector } from 'hooks/useSelector';

const SignUpContainer = () => {
  const handleSignUp = useThunkWithPayload(thunks.signUp);
  const signUpError = useSelector(signUpErrorSelector);

  return <SignUp onSignUp={handleSignUp} signUpError={signUpError} />;
};

export default SignUpContainer;
