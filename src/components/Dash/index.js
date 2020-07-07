import React from 'react';
import { withAuthorization } from '../Session';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
  </div>
);

const security = authUser => !!authUser;
export default withAuthorization(security)(Dashboard);