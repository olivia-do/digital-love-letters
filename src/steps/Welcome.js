import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div className="Step">
        <h3><strong>Welcome to PowerProm & Miss Amazing!</strong></h3>
        <p>We're a community thats nurture self-esteem in girls and women with intellectual and physical disabilities. At today's event, we'd like you to plant a flower for one of our amazing women.</p>
        <button onClick={ this.props.next }>Meet your Amazing!</button>
      </div>
    );
  }
}

App.defaultProps = {
  next: () => { }
}

export default App;
