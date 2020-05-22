import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'

const headingStyle = makeStyles((theme) => ({
    root: {
        position: 'relative',
        paddingBottom: 5,
        display: 'inline',
    },
    underline: {
        position: 'absolute',
        width: '80%',
        height: '2px',
        backgroundColor: theme.palette.info.main,
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)'
    }
}))

export function LargeHeading(props){

    const classes = headingStyle()

    return(
        <Grid item>
            <Grid container direction="column" style={{
                marginBottom: 20
            }}>
                <Grid item>
                    <Typography variant="h5" className={classes.root} >
                        {props.title}
                        <div className={classes.underline}/>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}