import React from 'react'
import {Container, TextField, Button} from '@material-ui/core'
import minLengthValidation from '../validation'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            error: ""
        };
    }

    validate(value) {
        return minLengthValidation(3, value)
    }

    onChange(event) {
        const { value } = event.target
        this.setState({nome: value});
    }

    onKeyUp(value) {
        const validation = this.validate(value)
        this.setState({error: validation});
    }

    onClick(value) {
        if(this.state.error == null){
            this.props.getNome(this.state.nome)
        } else {
            this.props.getNome("")
        }
    }

    render(){
        return (
            <Container>
                <form className="Form">
                    <TextField 
                    color="primary"
                    placeholder="Ex.: Rayane"
                    className="TextField" 
                    id="outlined-basic" 
                    variant="outlined" autoFocus 
                    onChange={event => this.onChange(event)} 
                    onKeyUp={event => this.onKeyUp(this.state.nome)}
                    error={this.state.error != null}
                    helperText={this.state.error}
                    autoComplete="false"
                    />
    
                    <Button 
                    className="Button" 
                    variant="contained" 
                    color="primary" 
                    onClick={() => this.onClick(this.state.nome)}
                    >
                        Buscar
                    </Button>
                </form>
            </Container>
        )
    }
}

export default Form;