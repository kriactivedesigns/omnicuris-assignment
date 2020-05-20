import React, { Component } from 'react'
import MediaPlayer from '../MediaPlayer/MediaPlayer'
import ModuleList from '../ModuleList/ModuleList'
import Title from '../Title/Title'
import Description from '../Description/Description'
import ExpertList from '../ExpertList/ExpertList'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

class Home extends Component{
    render(){
        return(
            <Container>
                <Grid container
                    direction="column"
                    style={{
                        minHeight:"100vh"
                    }}>
                    <Grid container
                        direction="row"
                        spacing={2}>
                        <Grid item
                            md={9}
                            sm={12}>
                            <Grid container
                                direction="column"
                                spacing={3}>
                                <Grid item
                                    lg={12}>
                                    <Title/>
                                </Grid>
                                <Grid item
                                    lg={12}>
                                    <MediaPlayer/>
                                </Grid>
                                <Grid item
                                    lg={12}>
                                    <Description/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <ModuleList/>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ExpertList/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Home