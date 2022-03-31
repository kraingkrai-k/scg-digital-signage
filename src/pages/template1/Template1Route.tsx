import React from 'react';
import {Route} from 'react-router-dom';

import Template1 from '.';

const Template1Route = (): React.ReactElement => {
  const routes = [
    {
      path: '/',
      Component: <Template1 />,
      exact: true,
    },
  ];

  return (
    <>
      {routes.map((x, i) => (
        <Route key={x.path} path={x.path} exact={x.exact}>
          {x.Component}
        </Route>
      ))}
    </>
  );
};

export default Template1Route;
