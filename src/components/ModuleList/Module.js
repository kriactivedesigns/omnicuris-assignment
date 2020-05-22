import React, { useEffect, useState } from 'react'
import ClockIcon from '@material-ui/icons/AccessTime'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import InfoIcon from '@material-ui/icons/Info'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core'
import ChapterList from './ChapterList'
import { useDispatch, connect } from 'react-redux'
import { getModuleDetails, setChapterData } from '../../redux'

const moduleStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 20,
        boxShadow: `0 2px 20px 1px rgba(0, 0, 0, 0.2)`,
        minHeight: 80,
        cursor: 'pointer',
        padding: '20px 20px'
    },
    coverContainer:{
        height: '100%',
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        width: 50,
    },
    cover:{
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundSize: ''
    },
    duration: {
        marginTop: 2
    }
}))

function Module(props){
    
    const classes = moduleStyles()
    const theme = useTheme()
    const dispatch = useDispatch()


    
    const { module, introData } = props
    const [chapters,setChapters] = useState([])
    const [isOpen,setIsOpen] = useState(false)
    
    const handleModuleOnClick = (module) => {
        if(module.introVideo){
            dispatch(setChapterData({
                url: module.introVideo,
                image: module.image,
                title: "Introduction"
            }))
        }else{
            setIsOpen(!isOpen)
            
            if(isOpen){
                dispatch(getModuleDetails(module.id))
                setChapters(<ChapterList/>)
            }
            else{
                setChapters(null)
            }
        }
    }

    if(module){
        return (
            <Card className={classes.root} >
                <Grid container direction="row" spacing={2}>
                    <Grid item sm={12}>
                        <Grid container direction="row">

                            <Grid item sm={12} onClick={(e) => {
                                    handleModuleOnClick(module)
                                }}>
                                <Grid container direction="row" spacing={3}>
                                    <Grid item sm={3}>
                                        <div className={classes.coverContainer}>
                                            <CardMedia className={classes.cover}
                                                image={module.moduleExperts[0].profilePic}/>
                                        </div>
                                    </Grid>
                                    <Grid item sm={9}>
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
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item sm={12}>
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
                            </Grid>
                       
                        </Grid>
                    </Grid>
                    <Grid item sm={12}>
                        {chapters}
                    </Grid>
                </Grid>
            </Card>
        )
    }
    else if(introData){
        
        dispatch(setChapterData({
            url: introData.introVideo,
            image: introData.image,
            title: "Introduction"
        }))

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
}

export default Module