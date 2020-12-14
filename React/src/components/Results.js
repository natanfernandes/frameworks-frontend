import React from 'react'
import axios from 'axios';
import { Grid, Container, Typography, Slide } from '@material-ui/core';
import TableList from './charts/TableList'
import ChartPie from './charts/ChartPie'
import ChartLine from './charts/ChartLine'
import ChartBar from './charts/ChartBar'

class Results extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: this.props.nome,
            columns: [
                { name: 'periodo', title: 'Período' },
                { name: 'frequencia', title: 'Frequêcia' },
            ],
            chartBar: {
                title: "Frequência por período",
                valueScale: "frequencia",
                scaleName: "frequencia",
                valueField: "frequencia",
                argumentField: "periodo"
            },
            chartPie: {
                title: "Comparativo de frequência por período",
                valueScale: "frequencia",
                scaleName: "frequencia",
                valueField: "frequencia",
                argumentField: "periodo"
            },
            chartLine: {
                title: "Linha de crescimento da frequência por período",
                valueScale: "frequencia",
                scaleName: "frequencia",
                valueField: "frequencia",
                argumentField: "periodo"
            },
            data: []

        }
    }

    componentDidUpdate() {
        axios.get("https://servicodados.ibge.gov.br/api/v2/censos/nomes/" + this.props.nome)
            .then(res => {
                var data = res.data[0].res.map(function(item){
                    return item;
                })

                this.setState({ data })
            }
        )
    }

    render() {
        return (
            <Slide in={true} direction="up">
                <Container className="ContainerBody">
                    <Typography variant="p">
                        Exibindo resultados: {this.props.nome}
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <TableList 
                                columns={this.state.columns} 
                                rows={this.state.data} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ChartPie
                                data={this.state.data} 
                                chart={this.state.chartPie}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <ChartLine
                                data={this.state.data} 
                                chart={this.state.chartPie}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <ChartBar 
                                data={this.state.data} 
                                chart={this.state.chartBar}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Slide>
        ) 
    }
}

export default Results;