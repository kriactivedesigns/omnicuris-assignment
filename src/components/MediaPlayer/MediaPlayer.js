import React from 'react'
import { 
    Paper,
    makeStyles, 
} from '@material-ui/core'
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme) => ({
    media: {
        position: "relative",
    },
    mask:{
        borderRadius: 25,
        overflow: 'hidden'
    },
    paper: {
        border: '3px solid',
        borderColor: theme.palette.common.white,
        borderRadius: 20,
        margin: '0px 20px !important',
    }
}))

function MediaPlayer (props) {

    const classes =useStyles();

    return(
        <Paper elevation={5}
            className={classes.paper}>
            <div className={classes.mask}>
                <ReactPlayer url="http://s3-ap-southeast-1.amazonaws.com/omnicuris-backend/t_courses/intro_videos/000/000/010/original/Thyroid_Final_480p.mp4"
                    className={classes.media}
                    controls
                    width="100%"
                    height="100%"/>
            </div>
        </Paper>
    )
}

export default MediaPlayer