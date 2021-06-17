
import React, { Component } from 'react';
import Pins from './components/Pins';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <div className='hero is-fullheight is-bold is-info'>
          <div className='hero-body'>
            <div className='container'>
              <div className='header content'>
                <h1 className='title is-1'>
                  Infinite Scroll TTP Code Challenge
                </h1>
              </div>
              <Pins />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
