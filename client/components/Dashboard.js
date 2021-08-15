import React from 'react';
import requireAuth from './requireAuth';

const Dashboard = () => {
	return <div>dashboard</div>;
};

export default requireAuth(Dashboard);
