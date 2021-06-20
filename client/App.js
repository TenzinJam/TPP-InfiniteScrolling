
import React, { Component } from 'react';
import Pins from './components/Pins';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
class App extends Component {
  render() {
    return (
      <div id='root'>
        <AppBar position="static">
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
              Kittens For Days
            </Typography>
          </Toolbar>
        </AppBar>
        <div className='container'>
          <Pins />
        </div>
      </div>
    );
  }
}

export default App
