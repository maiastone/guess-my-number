const React = require('react');


class GuessInputFields extends React.Component {
  constructor() {
    super();
    this.state = {
      lastGuess: '',
      guess: '',
      computerNumber: '',
      message: ''
    };
  }

  componentDidMount() {
    let randomNumber = Math.floor(Math.random() * (100-0 + 1)) + 0;
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
    });
  }

  compareGuess() {
    let guess = this.state.guess;
    let random = this.state.computerNumber;
    if (guess >= 100 || guess <= 1) {
    this.setState({message: 'Please enter a number between 1 and 100'});
    } else if (guess > random) {
      this.setState({message: 'Sorry, that guess is too high. Try a lower number.'});
    } else if (guess < random) {
      this.setState({message: 'Sorry, that guess is too low. Try a higher number.'});
    } else if (guess === random) {
      this.setState({message: 'Yay! You got it'});
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.compareGuess();
    this.setState({lastGuess: this.state.guess, guess:'' });
  }

  render() {
    return (
      <div>
        <h2>your last guess was {this.state.lastGuess}</h2>
        <p id='message'>{this.state.message}</p>
        <form>
          <input type='number'
                placeholder='guess a number'
                min='1' max='100'
                value={this.state.guess}
                onChange={(e)=>this.setState({guess: parseInt(e.target.value)})} />

            <button disabled={!this.state.guess}
            onClick={(e)=>this.handleClick(e)}>Guess</button>

            <button disabled={!this.state.guess}
             onClick={(e)=>this.clearInput(e)}>Clear</button>

            <button disabled={!this.state.guess}
            onClick={(e)=>this.resetGame(e)}>Reset</button>
        </form>
      </div>
    );
  }
}



module.exports = GuessInputFields;
