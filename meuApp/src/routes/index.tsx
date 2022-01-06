import React, { useState } from 'react';
import RoutesPublic from './routes.public';
import RoutesSecure from './routes.secure';

const Routes: React.FC = () => {
  const [signed, setSigned] = useState(true);

  return signed ? <RoutesSecure /> : <RoutesPublic />;
};

export default Routes;
