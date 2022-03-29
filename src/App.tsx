import './App.css'
import React from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';

import AppContainer from "./core/app/AppContainer";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        desktop: true;
        monitor43: true;
    }
}

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
            xl: 0,
            desktop: 1080,
            monitor43: 2160
        },
    },
});

const App: React.FunctionComponent = (): React.ReactElement => (
    // <AppContainer />
    <ThemeProvider theme={theme}>
        <AppContainer />
    </ThemeProvider>
)

export default App;
