const React = require('react');
const ReactDOM = require('react-dom');
const GuessInputField = require('./input');
// const GuessDisplay = require('./GuessDisplay');

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      guess: '',
      lastGuess: ''
    };
  }

  handleClick() {
    this.setState({lastGuess: this.state.guess});
    this.setState({guess:''});
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

        <h2>Your last guess was {this.state.lastGuess}</h2>
        <h3>That number is {}</h3>
        <input type='number' value={this.state.guess}
            placeholder='guess a number'
            onChange={(e)=>this.setState({guess: e.target.value})} />
        <button onClick={()=>this.handleClick()}>Guess</button>
        <button onClick={()=>this.handleClick()}>Clear</button>
        <button onClick={()=>this.handleClick()}>Reset</button>
      </div>
    );

  }

}

ReactDOM.render(<Application />, document.querySelector('.application'));
