import * as React from 'react';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Grid, Card, CardContent } from '@material-ui/core';

export default class Ranking extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <div className="Ranking">
        <Grid>
          <Card>
            <CardContent>
              <Chart
                data={chartData}
              >
                <ArgumentAxis />
                <ValueAxis max={10} />

                <BarSeries
                  valueField="frequencia"
                  argumentField="nome"
                />
                <Title text="Ranking: Nomes mais comuns no Brasil" />
                {/* <Animation /> */}
              </Chart>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}