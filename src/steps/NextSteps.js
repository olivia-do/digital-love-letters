import React from 'react';
import FlowerColor from './FlowerColor';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      color: null
    }
  }

  updateColor(c) {
    this.setState({
      color: c
    })
  }

  render () {
    let match = this.props.girl

    return (
      <div className="Step">
        <h1>Awesome!</h1>
        <p>Thank you for your support for { match.FirstName } today. And thank you for standing by every young woman's right to claim her own story, to stand up for herself, and to blossom into her fullest potential.</p>
        <p>Now go find the garden to see how your flower is growing!</p>
      </div>
    );
  }
}

App.defaultProps = {
  next: () => { }
}

export default App;
