import React, { useState } from 'react'
import ContainerForm from './ContainerForm'


const Search = (props) => {
    const [nome, setNome] = useState('');

    const getNome = (novoNome) => {
        setNome(novoNome);
    }

    return (
        <ContainerForm 
            text="O que o IBGE diz sobre seu nome?"
            getNome={getNome}
        />
    )
}

export default Search;