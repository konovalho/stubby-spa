import React from 'react';

import SignIn from './SignIn';

import * as thunks from 'models/user/thunks';
import { useSelector } from 'hooks/useSelector';
import { signInErrorSelector } from 'models/user/selectors';
import { useThunkWithPayload } from 'hooks/useAction';

const SignInContainer = () => {
  const handleSignIn = useThunkWithPayload(thunks.signIn);
  const signInError = useSelector(signInErrorSelector);

  return <SignIn onSignIn={handleSignIn} signInError={signInError} />;
};

export default SignInContainer;
