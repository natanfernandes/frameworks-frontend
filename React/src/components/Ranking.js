import React from 'react'
import axios from 'axios';
import { Grid, Container, Typography, Slide } from '@material-ui/core';
import TableList from './charts/TableList'
import ChartBar from './charts/ChartBar'
import ChartPie from './charts/ChartPie';

class Ranking extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.title,
            columns: [
                { name: 'ranking', title: 'Ranking' },
                { name: 'nome', title: 'Nome' },
                { name: 'frequencia', title: 'Frequêcia' },
            ],
            rows: [],
            chartBar: {
                title: "Top 10 nomes por frequência",
                valueScale: "frequencia",
                scaleName: "frequencia",
                valueField: "frequencia",
                argumentField: "nome"
            },
            dataBar: [],
            chartPie: {
                title: "Top 5 comparativo de nomes por frequência",
                valueScale: "frequencia",
                scaleName: "frequencia",
                valueField: "frequencia",
                argumentField: "nome"
            },
            dataPie: []
        }
    }

    componentDidMount() {
        axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking`)
          .then(res => {
            var rows = res.data[0].res.map(function(item){
                return item;
            })

            const dataBar = rows.slice(0, 11)
            const dataPie = rows.slice(0, 6)

            this.setState({ rows });
            this.setState({ dataBar });
            this.setState({ dataPie });
          })
      }

    render() {
        return (
            <Slide in={true} direction="up">
                <Container className="ContainerBody">
                    <Typography variant="h3">
                        {this.state.title}
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <ChartBar 
                                data={this.state.dataBar} 
                                chart={this.state.chartBar}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ChartPie
                                data={this.state.dataPie} 
                                chart={this.state.chartPie}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TableList 
                                columns={this.state.columns} 
                                rows={this.state.rows} 
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Slide>
        ) 
    }
}

export default Ranking;