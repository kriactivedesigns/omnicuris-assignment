import React from 'react'
import { 
    Grid,
    Card,
    CardMedia,
    Typography,
    makeStyles,
    useTheme
} from '@material-ui/core'
import { LargeHeading } from '../Common/Common';
import image from '../../static/me_bw.png'
import { connect } from 'react-redux'

const mapStatesToProps = (store) => {
    return {
        experts: store.experts.experts
    }
}

const useStyles = makeStyles((theme) => ({
    root:{
        padding: 5,
        borderRadius: 25,
        height: 220,
        width: 200,
    },
    media:{
        height: '100%',
        width: '100%',
        borderRadius: 22,
        backgroundSize: 'cover'
    }
}))


function Expert(props) {
    
    const classes = useStyles()
    const theme = useTheme()

    const { expert } = props
    console.log(expert)

    return(
        <Grid container direction="column" justify="center" spacing={2}>
            <Grid item>
                <Card className={classes.root} elevation={15}>
                    <CardMedia image={expert.profilePic}
                        className={classes.media}/>
                </Card>
            </Grid>
            <Grid item>
                <Typography variant='h5' align="center"
                    style={{
                        color: theme.palette.info.main
                    }}>
                    {expert.expertName}
                </Typography>
                <Typography variant="h6" align="center"
                    style={{
                        color: theme.palette.secondary.main
                    }}>
                    {expert.qualification}
                </Typography>
            </Grid>
        </Grid>
    )
}

const renderExpert = (experts) => {
    if(experts){
        return (
        experts.map((item,key) => 
            <Grid item key={key}>
                <Expert expert={item}/>
            </Grid>
        ))
    }    
}

const listStyle = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        overflowX: 'scroll',
        marginBottom: 30,
    }
}))

function ExpertList(props){

    const classes = listStyle()
    const { experts } = props

    return(
        <Grid container direction="column" spacing={3} justify="center" className={classes.root}>
            <Grid item>
                <LargeHeading title="Expert List" />
            </Grid>
            <Grid item>
                <Grid container direction="row" spacing={9} wrap="nowrap">
                    {
                        renderExpert(experts)
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default connect(mapStatesToProps)(ExpertList)