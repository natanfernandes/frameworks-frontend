import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import Button from '@material-ui/core/Button'

const Find = () => {
    return (
        <Container className="Find">
            <Typography variant="h2" color="inherit">
                About My Name
            </Typography>
            <Typography variant="p" color="inherit">
                Informe seu nome e encontre as informações mais interessantes
                sobre seu nome diretamente do site do IBGE
            </Typography>
            <form>
                <TextField className="TextField" id="outlined-basic" variant="outlined" />

                <br />

                <Button className="Button" variant="contained" color="primary">
                    Buscar
                </Button>
            </form>
        </Container>
    )
}

export default Find;