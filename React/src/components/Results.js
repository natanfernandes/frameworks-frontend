import React from 'react'
import axios from 'axios';
import { Grid, Container, Typography, Slide } from '@material-ui/core';
import ChartBar from './charts/ChartBar'

class Results extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: this.props.nome,
            chartBar: {
                title: "Frequência do nome por período",
                valueScale: "frequencia",
                scaleName: "frequencia",
                valueField: "frequencia",
                argumentField: "periodo"
            },
            dataBar: []
        }
    }

    componentDidMount() {
        axios.get("https://servicodados.ibge.gov.br/api/v2/censos/nomes/" + this.props.nome)
            .then(res => {
                var dataBar = res.data[0].res.map(function(item){
                    return item;
                })

                this.setState({dataBar})
            }
        )
    }

    render() {
        return (
            <Slide in={true} direction="up">
                <Container className="ContainerBody">
                    <Typography variant="h6">
                        Exibindo resultados para {this.props.nome}
                    </Typography>
                </Container>
            </Slide>
        ) 
    }
}

export default Results;