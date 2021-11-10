import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Route as RouteType } from '@types';

import AppRoute from './Route';
import Layout from 'components/Layout';
import AuthLayout from 'components/AuthLayout';
import NotFound from 'pages/NotFound';

type RouterProps = { routes: RouteType[] };

const AppRouter = ({ routes }: RouterProps) => {
  const mainAppRoutes = routes.filter(({ layout }) => layout === 'default');
  const authRoutes = routes.filter(({ layout }) => layout === 'auth');

  return (
    <Switch>
      <Route exact path={mainAppRoutes.map(({ path }) => path)}>
        <Layout>
          <Switch>
            {mainAppRoutes.map(({ path, ...rest }) => (
              <AppRoute key={path.toString()} path={path} {...rest} />
            ))}
          </Switch>
        </Layout>
      </Route>
      <Route exact path={authRoutes.map(({ path }) => path)}>
        <AuthLayout>
          <Switch>
            {authRoutes.map(({ path, ...rest }) => (
              <AppRoute key={path.toString()} path={path} {...rest} />
            ))}
          </Switch>
        </AuthLayout>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default AppRouter;
