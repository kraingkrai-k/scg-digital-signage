import {styled} from '@mui/material/styles';

export const Title35 = styled('span')(({theme}) => ({
    fontWeight: 700,
    fontSize: '35px',
    letterSpacing: 1.1,
    [theme.breakpoints.only('monitor43')]: {
        fontSize: '45px',
    },
    [theme.breakpoints.only('desktop')]: {
        fontSize: '24px',
    },
    [theme.breakpoints.only('xl')]: {
        fontSize: '24px',
    },
    [theme.breakpoints.only('lg')]: {
        fontSize: '20px',
    },
}));

export const Title45 = styled('span')(({theme}) => ({
    fontWeight: 700,
    fontSize: '45px',
    [theme.breakpoints.only('monitor43')]: {
        fontSize: '84px',
    },
    [theme.breakpoints.only('desktop')]: {

    },
    [theme.breakpoints.only('xl')]: {

    },
    [theme.breakpoints.only('lg')]: {
        fontSize: '42px',
    },
}));

export const Title30 = styled('span')(({theme}) => ({
    fontWeight: 700,
    fontSize: '30px',
    [theme.breakpoints.only('monitor43')]: {
        fontSize: '72px',
    },
    [theme.breakpoints.only('desktop')]: {

    },
    [theme.breakpoints.only('xl')]: {

    },
    [theme.breakpoints.only('lg')]: {
        fontSize: '30px',
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