import React from 'react';
import Text from './Text';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = { text: 'Not clicked!' };
  }

  onClick() {
    this.setState({ text: 'Clicked!' });
  }

  render() {
    return (
      <div className="main">
        <Text />
        <p>{this.state.text}</p>
        <button onClick={this.onClick.bind(this)}>Click</button>
      </div>
    );
  }
}

export default AppComponent;
