import React from 'react'
import { AppBar, Grid, Toolbar, Link } from '@material-ui/core'

const NavBar = (props) => {
    return (
        <div>
            <AppBar position="static" className="Navbar">
                <Toolbar>
                    <Grid container spacing={3}>
                        <Grid item>
                            <Link className="Link" href="/">About my name</Link>
                        </Grid>
                        <Grid item>
                            <Link className="Link" href="/pesquisar">Pesquisar</Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
