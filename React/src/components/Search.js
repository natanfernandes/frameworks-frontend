import React, { useState } from 'react'
import { Container } from '@material-ui/core';
import ContainerForm from './ContainerForm'
import Results from './Results'


const Search = (props) => {
    const [nome, setNome] = useState('');

    const getNome = (novoNome) => {
        setNome(novoNome);
    }

    return (
        <Container>
            <ContainerForm 
                text="O que o IBGE diz sobre seu nome?"
                getNome={getNome}
            />
            <Results nome={nome} />
        </Container>
    )
}

export default Search;