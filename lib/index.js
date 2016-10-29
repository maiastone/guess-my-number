const React = require('react');
const ReactDOM = require('react-dom');
const GuessInputField = require('./input');
const GuessDisplay = require('./GuessDisplay');

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      currentGuess: ''
    };
  }

  userGuess(guess) {
    this.state.currentGuess.push(guess);
    this.setState({currentGuess: this.state.currentGuess});
  }


  render() {
    return (
      <div>
        <GuessDisplay />
        <GuessInputField passGuess={this.userGuess.bind(this)}/>
      </div>
    );

  }

}

ReactDOM.render(<Application />, document.querySelector('.application'));
