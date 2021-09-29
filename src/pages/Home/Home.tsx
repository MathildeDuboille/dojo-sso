import { UserClaims } from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import Button from 'components/Button';
import React, { useEffect, useState } from 'react';
import { HomeContainer } from './Home.style';

const Home: React.FC = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState<null | UserClaims>(null);

  const login = async () => {
    oktaAuth.signInWithRedirect({ originalUri: '/' });
  };

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then(info => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]);

  if (!authState || !authState.isAuthenticated) {
    return (
      <HomeContainer>
        <Button onClick={login}>Log in</Button>
      </HomeContainer>
    );
  }

  if (authState.isAuthenticated && !userInfo) {
    return <HomeContainer>Loading user information...</HomeContainer>;
  }

  if (authState.isAuthenticated && userInfo) {
    return <HomeContainer>Welcome {userInfo.name}!</HomeContainer>;
  }

  return null;
};

export default Home;
