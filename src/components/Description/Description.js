import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { LargeHeading } from '../Common/Common'
import FaceBook from '@material-ui/icons/Facebook'

function Description(){
    return(
        <Grid container spacing={3}>
            <Grid item>
                <LargeHeading title="Description"/>
            </Grid>
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <FaceBook/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={12}>
                <Typography variant="body1" align="justify" paragraph>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Description