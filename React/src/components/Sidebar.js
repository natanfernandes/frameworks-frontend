import React from 'react'
import Container from '@material-ui/core/Container'
import FindName from './FindName'

const Sidebar = () => {
    return (
        <Container className="ContainerSidebar">
            <FindName />
        </Container>
    )
}

export default Sidebar;