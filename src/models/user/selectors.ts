import { createSelector } from 'reselect';

import { RootState } from '../index';

export const rootSelector = createSelector(
  (state: RootState) => state,
  (state) => state.user
);

export const currentUserSelector = createSelector(
  rootSelector,
  ({ current }) => current
);

export const signInErrorSelector = createSelector(
  rootSelector,
  ({ signInError }) => signInError
);

export const signUpErrorSelector = createSelector(
  rootSelector,
  ({ signUpError }) => signUpError
);

export const verifyErrorSelector = createSelector(
  rootSelector,
  ({ verifyError }) => verifyError
);
