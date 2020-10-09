import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return (
        <div>
            <AppBar position="fixed" className="Navbar">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        About My Name
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;