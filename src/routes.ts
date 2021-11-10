import { Route, Routes } from '@types';

import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';
import Verify from 'pages/Verify';
import Home from 'pages/Home';

export const routes: Route[] = [
  {
    path: Routes.signUp,
    exact: true,
    component: SignUp,
    cache: false,
    thunksToRun: [],
    title: 'Sign up',
    auth: false,
    layout: 'auth',
  },
  {
    path: Routes.signIn,
    exact: true,
    component: SignIn,
    cache: false,
    thunksToRun: [],
    title: 'Sign in',
    auth: false,
    layout: 'auth',
  },
  {
    path: Routes.verify,
    exact: true,
    component: Verify,
    cache: false,
    thunksToRun: [],
    title: 'Verify',
    auth: false,
    layout: 'auth',
  },
  {
    path: Routes.home,
    exact: true,
    component: Home,
    cache: false,
    thunksToRun: [],
    title: 'Home',
    auth: true,
    layout: 'default',
  },
];
