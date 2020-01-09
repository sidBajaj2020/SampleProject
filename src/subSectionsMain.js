import React from 'react'; 
import Card from './cards'; 
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

const StyledGrid = styled(Grid)`
    padding-top: 8em
    padding-left: 2em
`

export default function Main(props){
    return (
        <StyledGrid container spacing={2} direction="column">

            <Grid item container="row">
                <Grid item xs={4} >
                    <Card url="https://pbs.twimg.com/profile_images/288477152/Bart_Simpson_400x400.png" name="Daffy Duck" hobbies="Relaxing, Playing, Sleeping" />
                </Grid>
                <Grid item xs={4}>
                    <Card url="https://upload.wikimedia.org/wikipedia/en/1/10/Winniethepooh.png" name="Winnie the Pooh" />
                </Grid>
                <Grid item xs={4}>
                    <Card url={"https://i.pinimg.com/originals/a1/69/4e/a1694edeb4ea2f957bd461e60e05d292.png"} name="Dalmation"/>
                </Grid>
            </Grid>

            <Grid item container="row">
                <Grid item xs={4} >
                    <Card url="https://pbs.twimg.com/profile_images/288477152/Bart_Simpson_400x400.png"/>
                </Grid>
                <Grid item xs={4}>
                    <Card/>
                </Grid>
                <Grid item xs={4}>
                    <Card/>
                </Grid>
            </Grid>

        </StyledGrid>
    )
}