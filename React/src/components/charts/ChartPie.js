import React from 'react'
import { Paper } from '@material-ui/core';
import {
    Chart,
    ValueAxis,
    PieSeries,
    Title,
    Legend
  } from '@devexpress/dx-react-chart-material-ui';
  
  import { Animation } from '@devexpress/dx-react-chart';

const ChartPie = (props) => {
    return (
        <Paper className="ItemResult">
            <Chart
                data={props.data}
            >
                <Title text={props.chart.title} />
                <ValueAxis 
                    scaleName={props.chart.scaleName} 
                    showGrid={false} 
                    showLine 
                    showTicks 
                />
                <PieSeries
                    valueField={props.chart.valueField}
                    argumentField={props.chart.argumentField}
                    innerRadius={0.7}
                />
                <Legend />
                <Animation />
            </Chart>
        </Paper>
    )
}

export default ChartPie;