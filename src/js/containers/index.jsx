import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Webstarter from './Webstarter'

export default class App extends Component {
  render() {
    return (
        <div className='App'>
            <Route exact path="/" component={Webstarter}/>
        </div>
    );
  }
}
