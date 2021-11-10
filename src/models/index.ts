import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import userReducer from './user';

import history from '../utils/history';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
