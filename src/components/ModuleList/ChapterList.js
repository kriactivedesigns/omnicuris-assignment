import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme, CardMedia } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { connect, useDispatch } from 'react-redux'
import { setChapterData } from '../../redux'

const mapStatesToProps = (store) => {
    return {
        moduleDetail: store.moduleDetail
    }
}

const chapterStyle = makeStyles((theme) => ({
    paper: {
        borderRadius: 15,
        boxShadow: `0 2px 20px 1px rgba(0, 0, 0, 0.2)`,
        cursor: 'pointer',
        paddingLeft: 20,
        paddingRight: 20,
        margin: '20px 0'
    },
    media:{
        width: 50,
        height: 50,
        backgroundSize: 'cover',
        borderRadius: '50%',
    }
}))

function ChapterList(props){
    
    const dispatch = useDispatch()

    const handleChapterOnClick = (chapter) => {
        dispatch(setChapterData({
            url: chapter.content,
            title: chapter.title
        }))
    }

    const classes = chapterStyle()
    const theme = useTheme()
    const [chapters,setChapters] = React.useState([])

    useEffect(()=>{
        if(props.moduleDetail.lessonDetails){
            setChapters(props.moduleDetail.lessonDetails[0].userChapterDetails)
        }
    })

    if(chapters.length > 0){

        dispatch(setChapterData({
            url: chapters[0].content,
            title: chapters[0].title
        }))
        
       return( chapters.map((item,key) => 
            <Paper  className={classes.paper} 
                    onClick={(e) => {
                        handleChapterOnClick(item)
                    }}
                    key={key}>
                <Grid container spacing={2} direction="row">
                    <Grid item lg={3}>
                        <CardMedia image={item.chapterExperts[0].profilePic}
                            className={classes.media}/>
                    </Grid>
                    <Grid item lg={9}>
                        <Typography style={{
                                color: theme.palette.secondary.main
                            }}
                            variant="subtitle2">
                            Chapter {key+1}
                        </Typography>
                        <Typography component="span" 
                            style={{
                                color: theme.palette.info.main
                            }}
                            variant="subtitle2">
                            {item.title}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        ))
    }
    else{
        return null
    }

}

export default connect(mapStatesToProps)(ChapterList)