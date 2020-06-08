import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.scss"
import Home from './components/Home/Home'
import SunnyNav from './components/SunnyNav/SunnyNav'
import Logo from './components/Logo/Logo'

import img1 from './pictures/ss-1.jpg'
import img2 from './pictures/ss-2.jpg'
import img4 from './pictures/ss-4.jpg'
import em1 from './pictures/em-1.jpg'
import em2 from './pictures/em-2.jpg'
import em3 from './pictures/em-3.jpg'
import ssLogo from './pictures/ss-logo.svg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import {
  Container,
  Row,
  Col,
  Image,
  Carousel
} from 'react-bootstrap'

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <button onClick={this.handleClick("test")}>{loading ? "Loading..." : "Call TEST"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <Logo />
          <SunnyNav />
        </header>
        <Switch>
          <Router path="/" >
            <Home />
            {/* <About /> */}
          </Router>
          <Router path="/about" >
            {/* <About /> */}
          </Router>
          <Router path="/store" >
            {/* <About /> */}
          </Router>
          <Router path="/contact" >
            {/* <About /> */}
          </Router>
        </Switch>
      </Router>
    )
  }
}

export default App
