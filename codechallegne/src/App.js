import React, { Component } from 'react';
import BuyCookie from './containers/cookiescliker'
import Header from './components/header'
import CmImg from './components/cookieMonster'
import Footer from './components/footer'

import './App.css';

class App extends Component {
  render() {
    return (

      <div className='App'>
        <div className='cookie'>
            <BuyCookie  />
        </div>
      </div>
    );
  }
}

export default App;
