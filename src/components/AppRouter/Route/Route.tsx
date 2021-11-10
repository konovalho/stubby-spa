import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Redirect } from 'react-router-dom';

import useCurrentUser from 'hooks/useCurrentUser';

import { Routes, Route as RouteProps } from '@types';

type Props = { auth: boolean } & RouteProps;

const AppRoute = ({
  auth,
  path,
  title,
  component: Component,
  ...rest
}: Props) => {
  const currentUser = useCurrentUser();

  if (currentUser === null && auth) {
    return <Redirect to={Routes.signIn} />;
  }

  return (
    <Route path={path} exact {...rest}>
      <Helmet title={title} />
      {/* @ts-ignore */}
      <Component />
    </Route>
  );
};

export default AppRoute;
