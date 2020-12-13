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
            chart: {
                title: "Comparativo de nomes por frequência: Top 10",
                valueScale: "frequencia",
                scaleName: "frequencia",
                valueField: "frequencia",
                argumentField: "nome"
            },
            chartPie: {
                title: "Comparativo de nomes por frequência: Top 5",
                valueScale: "frequencia",
                scaleName: "frequencia",
                valueField: "frequencia",
                argumentField: "nome"
            },
            columns: [
                { name: 'ranking', title: 'Ranking' },
                { name: 'nome', title: 'Nome' },
                { name: 'frequencia', title: 'Frequêcia' },
            ],
            rows: [],
            pie: []
        }
    }

    componentDidMount() {
        axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking`)
          .then(res => {
            var result = res.data[0].res.map(function(item){
                return item;
            })

            const rows = result.slice(0, 11)
            const pie = result.slice(0, 6)

            this.setState({ rows });
            this.setState({ pie });
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
                        <Grid item xs={12} sm={6}>
                            <TableList 
                                columns={this.state.columns} 
                                rows={this.state.rows} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ChartPie
                                data={this.state.pie} 
                                chart={this.state.chartPie}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <ChartBar 
                                data={this.state.rows} 
                                chart={this.state.chart}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Slide>
        ) 
    }
}

export default Ranking;