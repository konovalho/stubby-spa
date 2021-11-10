import { Dispatch, PayloadAction } from '@reduxjs/toolkit';

import history from 'utils/history';

export const nextRouteMiddleware =
  () =>
  (next: Dispatch<PayloadAction<{ nextRoute: string }>>) =>
  (action: PayloadAction<{ nextRoute: string }>) => {
    next(action);

    if (action.payload && action.payload.nextRoute) {
      history.push(action.payload.nextRoute);
    }
  };
