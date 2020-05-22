import React, { useEffect } from 'react'
import { 
    Paper,
    makeStyles, 
} from '@material-ui/core'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'

const mapStateToProps = (store) => {
    return {
        chapter: store.chapter.chapter
    }
}

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
    const [url,setUrl] = React.useState(undefined)

    useEffect(() => {
        if(props.chapter){
            setUrl(props.chapter.url)
        }
    })

    return(
        <Paper elevation={5}
            className={classes.paper}>
            <div className={classes.mask}>
                <ReactPlayer url={url}
                    playing
                    className={classes.media}
                    controls
                    width="100%"
                    height="100%"/>
            </div>
        </Paper>
    )
}

export default connect(mapStateToProps)(MediaPlayer)