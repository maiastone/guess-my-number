const React = require('react');


class GuessInputFields extends React.Component {
  constructor() {
    super();
    this.state = {
      lastGuess: '',
      guess: '',
      computerNumber: ''
    }
  }

  componentDidMount() {
    let randomNumber = Math.floor(Math.random() * (100-0 + 1)) + 0;
    // this.generateRandomNumber(0, 100);
    this.setState({computerNumber: randomNumber });
  }

  clearInput(e) {
    e.preventDefault();
    this.setState({guess:''});
  }

  resetGame(e) {
    e.preventDefault();
    let randomNumber = Math.floor(Math.random() * (100-0 + 1)) + 0;
    this.setState({
      computerNumber: randomNumber,
      lastGuess: '',
      guess: ''
    })
  }

  compareGuess() {
    let guess = this.state.guess;
    let random = this.state.computerNumber;
    if (guess > random) {
    document.getElementById('message').innerHTML =
    'Sorry, that guess is too high. Try a lower number.';
  } else if (guess < random) {
    document.getElementById('message').innerHTML =
    'Sorry, that guess is too low. Try a higher number.'
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.compareGuess();
    this.setState({lastGuess: this.state.guess});
    this.setState({guess:''});
  }

  render() {
    return (
      <div>
        <h2>your last guess was {this.state.lastGuess}</h2>
        <p id='message'></p>
        <form>
          <input type='number'
                placeholder='guess a number'
                value={this.state.guess}
                onChange={(e)=>this.setState({guess: parseInt(e.target.value, 10)})} />
          <button onClick={(e)=>this.handleClick(e)}>Guess</button>
          <button onClick={(e)=>this.clearInput(e)}>Clear</button>
          <button onClick={(e)=>this.resetGame(e)}>Reset</button>
        </form>
      </div>
    );
  }
}



module.exports = GuessInputFields;
