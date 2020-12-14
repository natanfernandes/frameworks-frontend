import React, { useState } from 'react'
import { Container } from '@material-ui/core';


const Teste = (props) => {
    return (
        <Container>
            {props.nome}
        </Container>
    )
}

export default Teste;