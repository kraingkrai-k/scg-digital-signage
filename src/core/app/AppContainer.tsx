import Context from 'core/context';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from './routes';

const AppContainer: React.FunctionComponent = (): React.ReactElement => {
  return (
    <Context>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes />
      </BrowserRouter>
    </Context>
  );
};

export default AppContainer;
