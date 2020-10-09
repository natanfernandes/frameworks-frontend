import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const FindName = (props) => {
    const [name, setName] = useState('');

    return (
        <Container className="Find">
            <Typography variant="h2" color="inherit">
                About My Name
            </Typography>
            <Typography variant="p" color="inherit">
                Informe seu nome e encontre as coisas mais legais
                sobre ele diretamente do site do IBGE
            </Typography>
            <form>
                <TextField className="TextField" id="outlined-basic" variant="outlined" autoFocus 
                            onChange={event => setName(event.target.value)} />

                <br />
                <Button className="Button" variant="contained" color="primary" onClick={() => props.getName(name)}>
                    Buscar
                </Button>
            </form>
        </Container>
    )
}

export default FindName;