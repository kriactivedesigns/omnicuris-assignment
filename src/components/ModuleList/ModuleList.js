import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Module from './Module'

const containerStyle = makeStyles((theme) => ({
    root: {
        padding: '5px 20px',
        borderRadius: 20,
        boxShadow: `0px 0px 2px grey inset`,
        marginTop: 110,
        maxHeight: 500,
        overflow: 'hidden',
        overflowY: 'scroll'
    }
}))

const renderModules = (data) => {
    return (
        data.map((module,key) => 
            <Grid item key={key}>
                <Module module={module} />
            </Grid>
        )
    )

}

function ModuleList(props){

    const classes = containerStyle()
    const { data } = props

    if(data && data.modules){

        const introData = {
            introVideo : data.introVideo,
            image: data.image
        }

        return(
            <Grid container>
                <Paper elevation={2}
                    className={classes.root}>
                    <Grid container
                        direction="column"
                        spacing={2}>
                        <Grid item>
                            <Module introData={introData}/>
                         </Grid>
                        {renderModules(data.modules)}         
                    </Grid>
                </Paper>
            </Grid>
        )
    }
    else return <div>Loading...</div>
}

export default ModuleList