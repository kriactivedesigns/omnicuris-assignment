import React from 'react'
import { 
    Card,
    CardMedia, 
    makeStyles, 
    useTheme, 
    IconButton 
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    media: {
    }
}))

function MediaPlayer (props) {

    const classes =useStyles();
    const theme = useTheme();

    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media}
                        component="iframe"
                        src="http://s3-ap-southeast-1.amazonaws.com/omnicuris-backend/t_courses/intro_videos/000/000/010/original/Thyroid_Final_480p.mp4"
                    />
        </Card>
    )
}

export default MediaPlayer