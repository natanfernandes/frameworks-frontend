import React from 'react'
import { Paper } from '@material-ui/core';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
    Title,
  } from '@devexpress/dx-react-chart-material-ui';
  
  import { ValueScale } from '@devexpress/dx-react-chart';

const ChartLine = (props) => {
    return (
        <Paper className="ItemResult">
            <Chart
                data={props.data}
            >
                <Title text={props.chart.title} />
                <ValueScale name={props.chart.valueScale} />
                <ArgumentAxis />
                <ValueAxis 
                    scaleName={props.chart.scaleName} 
                    showGrid={false} 
                    showLine 
                    showTicks 
                />
                <LineSeries
                    name={props.chart.name}
                    valueField={props.chart.valueField}
                    argumentField={props.chart.argumentField}
                />
            </Chart>
        </Paper>
    )
}

export default ChartLine;