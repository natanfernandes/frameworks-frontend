import React from 'react'
import { Paper } from '@material-ui/core';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    Title,
  } from '@devexpress/dx-react-chart-material-ui';
  
  import { ValueScale, Animation } from '@devexpress/dx-react-chart';

const ChartBar = (props) => {
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
                <BarSeries
                    name={props.chart.name}
                    valueField={props.chart.valueField}
                    argumentField={props.chart.argumentField}
                    scaleName={props.chart.scaleName}
                />
                <Animation />
            </Chart>
        </Paper>
    )
}

export default ChartBar;