import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const Routes: React.FC = (): JSX.Element => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route path={'/dashboard'} component={Dashboard} />
    </Switch>
  </Suspense>
);

export default Routes;
