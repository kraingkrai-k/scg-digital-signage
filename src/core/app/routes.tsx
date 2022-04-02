import React, {useEffect, useState} from 'react';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ReactFullscreen from 'react-easyfullscreen';

import Template1Route from 'pages/template1/Template1Route';
import Template2Routes from 'pages/template2/Template2Route';
import Template3Routes from 'pages/template3/Template3Route';
import InteractiveRoutes from 'pages/interactive/InteractiveRoute';
import DirectoryRoutes from 'pages/directory/DirectoryRoute';
import {Template3Service} from 'pages/template3/service/template3-service';

const needMinHeight = 1;
const needMinWidth = 1080;

const personalTimer = 3000;
const personalWhiteListRoute = ['/', '/template2', '/template3'];

const Routes: React.FunctionComponent = (): React.ReactElement => {
  const {push} = useHistory();
  const {pathname} = useLocation();
  const [show, setShow] = useState<boolean>(false);

  let personal_timer: any;

  const currentWidth = window?.innerWidth || 0;
  const currentHeight = window?.innerHeight || 0;

  useEffect(() => {
    if (personalWhiteListRoute.indexOf(pathname) !== -1) {
      handlerPersonalRoute();
    } else {
      clearInterval(personal_timer);
    }

    return () => {
      clearInterval(personal_timer);
    };
    // eslint-disable-next-line
  }, [pathname]);

  const handlerPersonalRoute = () => {
    personal_timer = setInterval(() => {
      Template3Service()
        .getPersonalData()
        .then((x) => {
          if (x?.age) {
            push('/template3', x);
          } else {
            push('/');
          }
        })
        .catch((e) => console.log('personal err', e));
    }, personalTimer);
  };

  if (currentWidth >= needMinWidth && currentHeight >= needMinHeight) {
    return (
      <ReactFullscreen>
        {({ref, onRequest}: any) =>
          show ? (
            <Switch>
              <Route path="/" exact>
                <Template1Route />
              </Route>

              <Route path="/template2">
                <Template2Routes baseURL="/template2" />
              </Route>

              <Route path="/template3">
                <Template3Routes baseURL="/template3" />
              </Route>

              <Route path="/interactive">
                <InteractiveRoutes baseURL="/interactive" />
              </Route>

              <Route path="/directory">
                <DirectoryRoutes baseURL="/directory" />
              </Route>

              <Route path="*">
                <h1>not found.</h1>
              </Route>
            </Switch>
          ) : (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
              <Button
                ref={ref}
                onClick={() => {
                  onRequest();
                  setShow(true);
                }}
                variant="outlined"
                size="large"
              >
                Enter Full Screen
              </Button>
            </Box>
          )
        }
      </ReactFullscreen>
    );
  }

  return <>{`for ${needMinWidth} * ${needMinHeight}, current = ${window.innerWidth}*${window.innerHeight}`}</>;
};

export default Routes;
