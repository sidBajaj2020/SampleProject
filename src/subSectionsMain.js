import React from 'react'; 
import Card from './cards'; 
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

import { connect } from "react-redux";

const StyledGrid = styled(Grid)`
    padding-top: 8em
    padding-left: 2em
`

const GridItem = styled(Grid)`
    padding-top: 1em
`

function Main(props){
    const text = props.text
    return (
        <StyledGrid container spacing={2} direction="column">
            <Grid item container="row">
                {props[text].map(profile => <GridItem item xs={4} > <Card url={profile.url} name={profile.name} hobbies={profile.hobbies} /> </GridItem>)}
            </Grid>
        </StyledGrid>
    )
}

const mapStateToProps = (state) => {
    return state
}

const connectedMain = connect(mapStateToProps) (Main); 
export default connectedMain;

