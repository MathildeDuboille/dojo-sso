import React from 'react';

import AppCrashFallback from './components/AppCrashFallback';
import ErrorBoundary from './components/ErrorBoundary';
import Root from './components/Root';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FunctionComponent = () => (
  <ErrorBoundary FallbackComponent={AppCrashFallback}>
    <BrowserRouter>
      <Root>
        <Routes />
      </Root>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
