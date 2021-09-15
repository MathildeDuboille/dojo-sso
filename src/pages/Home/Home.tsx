import Button from 'components/Button';
import React from 'react';
import { HomeContainer } from './Home.style';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Button>Log in</Button>
    </HomeContainer>
  );
};

export default Home;
