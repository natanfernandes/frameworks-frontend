import React from 'react'
import { Container, Typography, Slide } from '@material-ui/core'
import Form from './Form'

const ContainerForm = (props) => {
    return (
        <Slide in={true} 
        direction="right"
        >
            <Container 
            className="Container ContainerForm"
            >
                <Container>
                    <Typography 
                    variant="h4" 
                    color="inherit"
                    >
                        {props.text}
                    </Typography>
                    <Form getNome={props.getNome} />
                </Container>
            </Container>
        </Slide>
    )
}

export default ContainerForm;