import React from 'react'
import { Paper } from '@material-ui/core';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

const TableList = (props) => {
    return (
        <Paper className="ItemResult">
            <Grid
                rows={props.rows}
                columns={props.columns}
            >
            <Table />
            <TableHeaderRow />
            </Grid>
        </Paper>
    )
}

export default TableList;