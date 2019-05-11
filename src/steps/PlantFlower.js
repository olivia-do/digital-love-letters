import React from 'react';
import $ from 'jquery';

import FlowerColor from './FlowerColor';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      color: null
    }

    this.next = this.next.bind(this)
  }

  updateColor(c) {
    console.log(c)
    this.setState({
      color: c
    })
  }

  async next() {
    let data = {
      to: this.props.girl,
      from: $('.toName').val(),
      color: this.state.color,
      message: $('.message').val()
    }

    this.props.createFlower && await this.props.createFlower(data)
    this.props.next && await this.props.next()
  }

  render () {
    let styles = {}
    let match = this.props.girl

    return (
      <div className="Step" style={ styles }>
        <div className="Section">
          <h4>Pick a Color</h4>
          <p>Select a color that you think your Amazing will enjoy!</p>
          <FlowerColor onSelect={ this.updateColor.bind(this) }/>
        </div>
        <div className="Section">
          <h4>Leave a message with your flower</h4>
          <p>Optionally, show your support with a short message to { match.FirstName }</p>
          <input className="toName form-input input-lg input-block" placeholder="Your Name?" />
          <textarea className="message form-input input-lg" placeholder="Your Message!"></textarea>
        </div>
        <button className="next" onClick={ this.next }>Plant your flower!</button>
      </div>
    );
  }
}



App.defaultProps = {
  next: () => { },
  girl: {}
}

export default App;
