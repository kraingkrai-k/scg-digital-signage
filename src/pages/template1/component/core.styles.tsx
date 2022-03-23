import Card from '@mui/material/Card';
import {styled} from '@mui/material/styles';

import {COLORS} from 'core/utils/constant';

export const WrapExample = styled('div')(({theme}) => `
${theme.breakpoints.only('monitor43')}{
    padding-left: 10%;
    padding-top: 7%;
};
${theme.breakpoints.only('desktop')}{
    padding-left: 10%;
    padding-top: 13%;
};
${theme.breakpoints.only('xl')}{
    padding-left: 15%;
    padding-top: 16px;
};
${theme.breakpoints.only('lg')}{
    padding-left: 42px;
    padding-top: 78px;
};
`);

export const WrapExample2 = styled('div')(({theme}) => ({
    minWidth: '300px',
    [theme.breakpoints.only('monitor43')]: {
        minWidth: '830px',
    },
    [theme.breakpoints.only('desktop')]: {
    },
    [theme.breakpoints.only('xl')]: {
    },
    [theme.breakpoints.only('lg')]: {
        minWidth: '230px',
    },
}));