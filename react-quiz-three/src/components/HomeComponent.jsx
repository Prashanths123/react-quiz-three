import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomeComponent extends Component {
  render() {
    return (
      <>
      <div id='home'>
        <h1>QUIZ APP</h1>
      <Link to={"/quiz"}>
        <button id='start'>Play</button>
      </Link>
      </div>
      </>
    )
  }
}