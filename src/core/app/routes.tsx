import React from "react";
import {Route, Switch} from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import Template1Route from "pages/template1/Template1Route";
import Template2Routes from "pages/template2/Template2Route";
import Template3Routes from "pages/template3/Template3Route";
import InteractiveRoutes from "pages/interactive/InteractiveRoute";
import DirectoryRoutes from "pages/directory/DirectoryRoute";

const Routes: React.FunctionComponent = (): React.ReactElement => {
    const matches = useMediaQuery('(min-width:1200px)');

    if (!matches) {
        return <>start 1200px</>
    }

    return (
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
    )
};

export default Routes;
