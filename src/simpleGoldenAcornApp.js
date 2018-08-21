import React from 'react';
import Button from './button';
import Display from './display';

class SimpleGoldenAcornApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 38) {
        this.changeValue(1)();
      } else if (e.keyCode === 40) {
        this.changeValue(-1)();
      }
    });
  }

  changeValue(count) {
    const { value } = this.state;
    return () => {
      if (value + count > -1) {
        this.setState({ value: value + count });
      }
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <Button name="Buy One" callback={this.changeValue(1)} />
        <Display>
          {value}
        </Display>
        <Button name="Eat One" callback={this.changeValue(-1)} />
      </div>
    );
  }
}

export default SimpleGoldenAcornApp;
