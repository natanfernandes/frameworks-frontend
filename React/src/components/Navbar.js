import React from 'react'
import {AppBar, Grid, Toolbar, Link} from '@material-ui/core'

const NavBar = (props) => {
    return (
        <div>
            <AppBar position="static" className="Navbar">
                <Toolbar>
                    <Grid container spacing={3}>
                        <Grid item>
                            <Link href="/">About my name {props.nome} </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/">Pesquisar</Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
