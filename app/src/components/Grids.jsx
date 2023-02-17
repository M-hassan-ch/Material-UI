import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    background:{
        border:'2px solid red',
    }
})

export default function Grids() {
    const classes = useStyles();
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={4} className={classes.background}>1</Grid>
                    <Grid item xs={12} md={4} className={classes.background}>2</Grid>
                    <Grid item xs={12} md={4} className={classes.background}>3</Grid>
                </Grid>
            </Container>
        </>
    )
}

