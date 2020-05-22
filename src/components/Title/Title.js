import React from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px',
        padding: '15px 10px',
    }
}))

function Title(){

    const classes = useStyles()

    return(
        <Paper elevation={2}
            className={classes.root}>
            <Typography color="textSecondary"
                    variant="h6">
                {`Thyroid in Pregnancy: `}
                <Typography color="primary" 
                    component="span"
                    variant="h6">
                         Introduction
                </Typography>
            </Typography>
        </Paper>
    )
}

export default Title