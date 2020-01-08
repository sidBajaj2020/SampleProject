import React from 'react';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';

const Title = styled.div`
    position: absolute; 
    font-size: 2em
    color: #800000 
    top: 22%; 
    left: 40%; 
`

export default function title (props){
    return (    
    <Title><em>{props.text}</em></Title>
    )
}