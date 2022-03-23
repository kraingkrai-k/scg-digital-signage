import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import Template1Route from "pages/template1/Template1Route";
import Template2Routes from "pages/template2/Template2Route";

const TIME_OUT = 10000

const Routes: React.FunctionComponent = (): React.ReactElement => {
    let interval: any

    const [isNoInteractive, setIsNoInteractive] = useState<boolean>(true)
    const matches = useMediaQuery('(min-width:1024px)');

    useEffect(() => {
        if (isNoInteractive) {
            interval = setTimeout(() => {
                setIsNoInteractive(false)
            }, TIME_OUT)
        }
        // eslint-disable-next-line
    }, [isNoInteractive])

    return (
        <Switch>
            <Route path="/" exact>
                <Template1Route />
            </Route>

            <Route path="/template2">
                <Template2Routes baseURL="/template2" />
            </Route>

            <Route path="*">
                <h1>not found.</h1>
            </Route>
        </Switch>
    )
};

export default Routes;
