const React = require('react');
const ReactDOM = require('react-dom');
const GuessInputFields = require('./input');
const GuessDisplay = require('./GuessDisplay');

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      // lastGuess: '',
      computerNumber: ''
    };
  }



  RandomNumber(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
  }


  // compareGuess() {
  //   this.state.guess > computerNumber ? 'too high' : 'too low'
  // }



  render() {
    return (
      <div>

        <GuessDisplay userGuess={this.state.lastGuess}
          computerNumber={this.state.computerNumber}/>
        <GuessInputFields />
      </div>
    );

  }

}

ReactDOM.render(<Application />, document.querySelector('.application'));
