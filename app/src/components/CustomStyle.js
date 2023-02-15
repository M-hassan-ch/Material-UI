// import { makeStyles } from '@mui/styles';
import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
// const useStyles = makeStyles((theme) => ({
//     background: 'red',
// }));

const useStyles = makeStyles({
    background:{
        background:'red',
        '&:hover':{
            background:'yellow'
        }
    }
})

// const styles = makeStyles({
//     btn: {
//         color: 'red',
//         '&:hover': {
//             backgroundColor: 'yellow',
//         }
//     }
// });

export default function CustomStyle() {
    const classes = useStyles();
    return (
        <>
            <Button className={classes.background} variant='contained'>Custom design</Button>
        </>
    )
}
