import React, { Component } from 'react'
import MediaPlayer from '../MediaPlayer/MediaPlayer'
import ModuleList from '../ModuleList/ModuleList'
import Title from '../Title/Title'
import Description from '../Description/Description'
import ExpertList from '../ExpertList/ExpertList'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'

const mapStateToProps = (store) => {
    return {
        courceDetails: store.courceDetails.courceDetails
    }
}

class Home extends Component{

    render(){
        return(
            <Container>
                <Grid container spacing={3}>
                    <Grid item>
                        <Grid container spacing={3}>
                            <Grid item md={8}>
                                <Grid container spacing={3}>
                                    <Grid item md={12}>
                                        <Title/>
                                    </Grid>
                                    <Grid item md={12} style={{
                                            maxHeight: 500,
                                            marginBottom: 30
                                        }}>
                                        <MediaPlayer/>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Description/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={4}>
                                <ModuleList data={this.props.courceDetails}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12}>
                        <ExpertList/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Home)