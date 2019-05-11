import React from 'react';

const colors = [
  '#E0BBE4',
  '#957DAD',
  '#D291BC',
  '#FEC8D8',
  '#FFDFD3',
  '#FF6961',
  '#C23B23',
  '#FFCC33',
  '#CCFF99',
  '#3399FF'
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      active: 0
    }
  }

  render () {
    let renderColors = (se) => {
      return colors.map((c, i) => {
        let classes = ['Color']

        if (i == se) { classes.push('Active') }

        return (
          <button onClick={ selectColor.bind(this, c, i) } style={ { background: c } } className={ classes.join(' ') }></button>
        )
      })
    }

    let selectColor = (c, i, e) => {
      e.preventDefault()

      this.setState({
        active: i
      })

      this.props.onSelect && this.props.onSelect(c)
    }

    return (
      <div className="ColorPicker">
        { renderColors(this.state.active) }
      </div>
    )
  }
}

App.defaultProps = {
  next: () => { }
}

export default App;
