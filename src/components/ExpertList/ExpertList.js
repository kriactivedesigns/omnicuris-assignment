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

    return(
        <Grid container direction="column" justify="center" spacing={2}>
            <Grid item>
                <Card className={classes.root} elevation={15}>
                    <CardMedia image={image}
                        className={classes.media}/>
                </Card>
            </Grid>
            <Grid item>
                <Typography variant='h5' align="center"
                    style={{
                        color: theme.palette.info.main
                    }}>
                    Dr. Susheela Rani
                </Typography>
                <Typography variant="h6" align="center"
                    style={{
                        color: theme.palette.secondary.main
                    }}>
                    MBBS, MD
                </Typography>
            </Grid>
        </Grid>
    )
}

const renderExpert = (props) => {

    var test = [1,2,3,4,5,6]

    return (
        test.map((item,key) => 
            <Grid item key={key}>
                <Expert/>
            </Grid>
    ))
}

const listStyle = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        overflowX: 'scroll',
        marginBottom: 30,
    }
}))

function ExpertList(){

    const classes = listStyle()

    return(
        <Grid container direction="column" spacing={3} justify="center" className={classes.root}>
            <Grid item>
                <LargeHeading title="Expert List" />
            </Grid>
            <Grid item>
                <Grid container direction="row" spacing={9} wrap="nowrap">
                    {
                        renderExpert()
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ExpertList