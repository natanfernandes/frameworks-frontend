import React from 'react'
import Container from '@material-ui/core/Container'
import FindName from './FindName'
import { Typography } from '@material-ui/core';

const Sidebar = (props) => {
    return (
        <Container className="ContainerSidebar">
            <FindName getName={props.getName} />
        </Container>
    )
}

export default Sidebar;