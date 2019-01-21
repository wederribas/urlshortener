import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import MainContainer from './components/MainContainer'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <Router>
        <main className="App" style={{ height: '80%' }}>
          <Navbar />
          <Route path="/" exact component={MainContainer} />
          <Route path="/about" component={About} />
        </main>
      </Router>
    )
  }
}

export default App
