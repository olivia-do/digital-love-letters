import React from 'react';

class App extends React.Component {
  render () {
    let match = this.props.girl
    let img = 'url(/img/' + match.FirstName + '%20' + match.LastInitial + 'jpg)'


    return (
      <div className="Step">
        <div className="amazing-img" style={{backgroundImage: img}} />
        <h1>Meet { match.FirstName } { match.LastInitial },</h1>
        <p>{ match.FirstName } is { match.Age } years old and is from { match.Hometown }.</p>
        <p><strong>{ match.Bio }</strong></p>
        <button className="next" onClick={ this.props.next }>Plant a flower for { match.FirstName }!</button>
      </div>
    );
  }
}

App.defaultProps = {
  next: () => { }
}

export default App;
