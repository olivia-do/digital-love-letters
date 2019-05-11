import React from 'react'
import './App.css'
import girls from './MissAmazingsList.js'
import db from './db'

import Welcome from './steps/Welcome'
import YourGirl from './steps/YourGirl'
import PlantFlower from './steps/PlantFlower'
import NextSteps from './steps/NextSteps'

const Steps = [
  Welcome,
  YourGirl,
  PlantFlower,
  NextSteps
]

class App extends React.Component {
  constructor() {
    super()

    while (!this.girl || !this.girl.PhotoLink) {
      let choice = Math.floor(Math.random() * girls.length)
      this.girl = girls[choice]
    }

    this.state = {
      step: 0
    }

    this.next = this.next.bind(this)
    this.createFlower = this.createFlower.bind(this)
  }

  next() {
    this.state.step += 1
    this.setState(this.state)
  }

  async createFlower(data) {
    return await db.add(data)
  }

  render () {
    let Step = Steps[this.state.step]
    let height = window.innerHeight
    return (
      <div className="App" style={ { height: height + 'px' } }>
        <Step next={ this.next } girl={ this.girl } createFlower={ this.createFlower }></Step>
      </div>
    );
  }
}

export default App;
