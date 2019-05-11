import React from 'react'

class App extends React.Component {
  constructor() {
    super()

    navigator.getMedia = ( navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia
    )

    this.state = {
      src: null
    }

    navigator.getMedia({ video: true }, this.updateStream.bind(this), console.log)
  }

  updateStream(stream) {
    this.setState({
      src: stream
    })
  }

  loadVideo() {
    let doc = document.getElementById("video")
    doc.srcObject = this.state.src
    doc.play();
  }

  componentDidMount() {
    this.loadVideo.bind(this)()
  }

  componentDidUpdate() {
    this.loadVideo.bind(this)()
  }

  render () {
    return (
      <video id="video" srcObject={ this.state.src } autoPlay={ true }></video>
    )
  }
}

export default App;
