import React, { useEffect } from 'react';

import { CommonProps } from './types';

import * as thunks from 'models/user/thunks';
import { useThunk } from 'hooks/useAction';
import useCurrentUser from 'hooks/useCurrentUser';

import App from './App';

const AppContainer = (props: CommonProps) => {
  const onGetCurrentUser = useThunk(thunks.getCurrentUser);
  const currentUser = useCurrentUser();

  useEffect(() => {
    onGetCurrentUser();
  }, [onGetCurrentUser]);

  return currentUser !== undefined ? <App {...props} /> : null;
};

export default AppContainer;
