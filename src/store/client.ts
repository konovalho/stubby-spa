/* eslint-disable no-underscore-dangle */

import { configureStore } from '@reduxjs/toolkit';
import _omit from 'lodash/omit';

import { rootReducer } from 'models/index';
import { nextRouteMiddleware } from './middlewares/nextRoute';

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: _omit(window.__INITIAL_STATE__, 'router'),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nextRouteMiddleware),
});
