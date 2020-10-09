import * as React from 'react';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Grid, Card, CardContent } from '@material-ui/core';

// const data = [
//   { year: '1950', population: 2.525 },
//   { year: '1960', population: 3.018 },
//   { year: '1970', population: 3.682 },
//   { year: '1980', population: 4.440 },
//   { year: '1990', population: 5.310 },
//   { year: '2000', population: 6.127 },
//   { year: '2010', population: 6.930 },
// ];

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
        <Grid xs={6}>
          <Card>
            <CardContent>
              <Chart
                data={chartData}
                rotated
              >
                <ArgumentAxis />
                <ValueAxis max={7} />

                <BarSeries
                  valueField="population"
                  argumentField="year"
                />
                <Title text="World population" />
                {/* <Animation /> */}
              </Chart>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}