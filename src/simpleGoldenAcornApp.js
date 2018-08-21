import React from 'react';
import Button from './button';
import Display from './display';

class SimpleGoldenAcornApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.eatOne = this.eatOne.bind(this);
    this.buyOne = this.buyOne.bind(this);
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

  buyOne() {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  }

  eatOne() {
    this.setState(prevState => (prevState.value - 1 > -1
      ? { value: prevState - 1 }
      : { value: prevState.value }));
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
        {/* <Button name="Buy One" callback={this.changeValue(1)} /> */}
        <Button name="Buy One" callback={this.buyOne} />
        <Display>
          {value}
        </Display>
        <Button name="Eat One" callback={this.changeValue(-1)} />
      </div>
    );
  }
}

export default SimpleGoldenAcornApp;
