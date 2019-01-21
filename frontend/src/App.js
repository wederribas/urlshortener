import React, { Component } from 'react'

import Navbar from './components/Navbar'
import MainContainer from './components/MainContainer'

class App extends Component {
  render() {
    return (
      <main className="App" style={{ height: '80%' }}>
        <Navbar />
        <MainContainer />
      </main>
    )
  }
}

export default App
