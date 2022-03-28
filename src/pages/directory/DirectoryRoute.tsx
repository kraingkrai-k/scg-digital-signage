import React from "react";
import {Route} from "react-router-dom";

import Directory from ".";

const DirectoryRoutes = ({baseURL}: {baseURL: string}): React.ReactElement => {

    const routes = [
        {
            path: `${baseURL}`,
            Component: <Directory />,
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

export default DirectoryRoutes