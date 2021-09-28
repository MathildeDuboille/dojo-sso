import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { useHistory } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import config from './authConfig';

const oktaAuth = new OktaAuth(config);

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const Routes: React.FC = (): JSX.Element => {
  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: OktaAuth, originalUri: string) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Suspense fallback={<Loader />}>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <SecureRoute path={'/dashboard'} component={Dashboard} />
          <Route path="/login/callback" component={LoginCallback} />
        </Switch>
      </Security>
    </Suspense>
  );
};

export default Routes;
