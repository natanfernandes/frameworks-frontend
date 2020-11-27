import React from 'react'
import {AppBar, Toolbar, Typography, Breadcrumbs, Link} from '@material-ui/core'

const NavBar = (props) => {
    return (
        <div>
            <AppBar position="fixed" className="Navbar">
                <Toolbar>
                    <Breadcrumbs className="Breadcrumbs" aria-label="breadcrumb">
                        <Link color="inherit" href="/">
                            About my name
                        </Link>
                        <Link color="inherit" href="/getting-started/installation/">
                            Nome
                        </Link>
                        <Typography>{props.name}</Typography>
                    </Breadcrumbs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
