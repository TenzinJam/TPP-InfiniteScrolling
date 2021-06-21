
import React, { Component } from 'react';
import Pins from './components/Pins';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { colors, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.blueGrey[500]
    }
  }
})
function App() {
    return (
      <ThemeProvider theme={theme}>
        <div id='root'>
          <AppBar position="sticky"  style={{ borderRadius: "80px", paddingBottom: "20px" }}>
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <img src="/logo.png" alt="logo" style={{height: "40px"}}/>
              <Typography variant="h6">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kittens For Days
              </Typography>
            </Toolbar>
          </AppBar>
          <div className='container'>
            <Pins />
          </div>
        </div>
      </ThemeProvider>
    );
}

export default App
