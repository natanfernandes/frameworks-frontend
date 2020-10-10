import React from 'react'
import FindName from './FindName'
import { Container } from '@material-ui/core';

const Sidebar = (props) => {
    return (
        <Container className="ContainerSidebar">
            <FindName getName={props.getName} />
        </Container>
    )
}

export default Sidebar;