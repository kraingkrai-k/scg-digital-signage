import {styled} from '@mui/material/styles';

export const Title35 = styled('span')(({theme}) => ({
    fontWeight: 700,
    fontSize: '35px',
    [theme.breakpoints.only('monitor43')]: {
        
    },
    [theme.breakpoints.only('desktop')]: {
        
    },
    [theme.breakpoints.only('xl')]: {
        
    },
    [theme.breakpoints.only('lg')]: {
        fontSize: '24px',
    },
}));

export const Title2 = styled('span')(({theme}) => ({
    fontWeight: 700,
    fontSize: '1.4vw',

    [theme.breakpoints.only('monitor43')]: {
        fontSize: '1.8vw'
    },
    [theme.breakpoints.only('desktop')]: {
        fontSize: '1.4vw'
    },
    [theme.breakpoints.only('xl')]: {
        fontSize: '1.4vw'
    },
    [theme.breakpoints.only('lg')]: {
        fontSize: '1.8vw'
    },
}));

export const Title3 = styled('span')(({theme}) => ({
    fontWeight: 400,
    fontSize: '1.15vw',
    fontStyle: 'normal',
    '.bold': {
        fontWeight: 700,
        fontStyle: 'bold',
    },

    [theme.breakpoints.only('monitor43')]: {
        fontSize: '1.2vw'
    },
    [theme.breakpoints.only('desktop')]: {
        fontSize: '1.2vw'
    },
    [theme.breakpoints.only('xl')]: {
        fontSize: '1.15vw'
    },
    [theme.breakpoints.only('lg')]: {
        fontSize: '1.15vw'
    },
}));