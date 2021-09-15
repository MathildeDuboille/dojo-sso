import React from 'react';
import { DashboardContainer, Text } from './Dashboard.style';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Text>You should see this page only if you are logged in</Text>
    </DashboardContainer>
  );
};

export default Dashboard;
