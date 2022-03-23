import React from "react";
import {Route} from "react-router-dom";

import Home from ".";

const Template2Routes = ({baseURL}: {baseURL: string}): React.ReactElement => {

    const routes = [
        {
            path: `${baseURL}`,
            Component: <Home />,
            exact: true
        },
        {
            path: `${baseURL}/:id`,
            Component: <h2>Sub ID</h2>,
            exact: false
        },
    ]

    return (
        <>
            {
                routes.map((x, i) => (
                    <Route key={x.path} path={x.path} exact={x.exact}>
                        {x.Component}
                    </Route>
                ))
            }
        </>
    )
}

export default Template2Routes