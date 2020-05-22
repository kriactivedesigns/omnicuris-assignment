import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles, useTheme } from '@material-ui/core'
import cover from '../../static/me_bw.png'
import ClockIcon from '@material-ui/icons/AccessTime'
import Grid from '@material-ui/core/Grid'
import InfoIcon from '@material-ui/icons/Info'

const moduleStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 20,
        boxShadow: `0 2px 20px 1px rgba(0, 0, 0, 0.2)`,
        minHeight: 80,
        cursor: 'pointer'
    },
    duration: {
        marginTop: 2
    }
}))

const handleModuleOnClick = (props) => {
    console.log(props)
}

function Module(props){

    const classes = moduleStyles()
    const theme = useTheme()

    const { module, introData } = props

    if(module){
        return (
            <Card className={classes.root} onClick={(e) => {
                    handleModuleOnClick(module)
                }}>
                <CardMedia className={classes.cover}
                    image={cover}/>
                <CardContent style={{
                        padding: '20px 25px'
                    }}>
                    <Typography style={{
                            color: theme.palette.secondary.main
                        }}
                        variant="subtitle2">
                        {module.title} -
                        <Typography component="span" 
                            style={{
                                color: theme.palette.info.main
                            }}
                            variant="subtitle2">
                            {module.name}
                        </Typography>
                    </Typography>
                    <Grid className={classes.duration}
                        spacing={1}
                        container
                        justify="flex-end"
                        direction="row">
                        <Grid item>
                            <ClockIcon fontSize="small" color="primary"/> 
                        </Grid>
                        <Grid item>
                            <Typography color="textSecondary"
                                variant="subtitle2">
                                    {module.durationStr}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
    else if(introData){
        return (
            <Card className={classes.root} 
                onClick={(e) => {
                    handleModuleOnClick(introData)
                }}>
                <Grid container direction="row" justify="flex-start"
                    style={{
                        padding: '20px 25px'
                    }} spacing={3}>
                    <Grid item>
                        <InfoIcon style={{
                            color: theme.palette.info.main,
                            fontSize: '60px'
                        }}/>
                    </Grid>
                    <Grid item>
                        <Typography style={{
                                color: theme.palette.secondary.main,
                                paddingTop: 15,
                                fontWeight: 500
                            }}
                            variant="h5">
                            Introduction
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        )
    }
    else return null
}

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