import React from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux'

const mapStateToProps = (store) => {
    return {
        chapter: store.chapter.chapter
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px',
        padding: '15px 10px',
    }
}))

function Title(props){

    const classes = useStyles()

    const [title,setTitle] = React.useState('')

    React.useEffect(() => {
        if(props.chapter){
            setTitle(props.chapter.title)
        }
    })

    return(
        <Paper elevation={2}
            className={classes.root}>
            <Typography color="textSecondary"
                    variant="h6">
                {`Thyroid in Pregnancy: `}
                <Typography color="primary" 
                    component="span"
                    variant="h6">
                         {title}
                </Typography>
            </Typography>
        </Paper>
    )
}

export default connect(mapStateToProps)(Title)