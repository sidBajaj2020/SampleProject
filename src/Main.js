import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

const Header1 = styled.h1`
    padding-top: 5em; 
    margin: 0.5em 4em; 
    font-size: 3em
    color: #800000
`

const Header2 = styled.h1`
    padding-right: 2.0em;
    margin: 0.5em 6.5em; 
    font-size: 2em
`

export default function Main(){
    return (
        <Grid container>
            <Grid item spacing={2} xs="8">
                <Header1>Life is Short.</Header1>
                <Header2>Arrange a Play Date.</Header2>
            </Grid>
                <Grid item xs="4" container direction="column-reverse">
                    <Grid item>
                        <img src="https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png"></img>
                    </Grid>
                </Grid>
        </Grid>
    )
}