import { useOktaAuth } from '@okta/okta-react';
import Button from 'components/Button';
import React from 'react';
import { HomeContainer } from './Home.style';

const Home: React.FC = () => {
  const { authState, oktaAuth } = useOktaAuth();

  const login = async () => {
    oktaAuth.signInWithRedirect({ originalUri: '/' });
  };

  if (!authState || !authState.isAuthenticated) {
    return (
      <HomeContainer>
        <Button onClick={login}>Log in</Button>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      <div>Welcome, you are now authenticated !</div>
    </HomeContainer>
  );
};

export default Home;
