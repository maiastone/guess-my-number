const React = require('react');


class GuessInputFields extends React.Component {
  constructor() {
    super();
    this.state = {
      lastGuess: '',
      guess: '',
      computerNumber: '',
      message: '',
      min: '',
      max: ''
    };
  }

  componentDidMount(){
    let min = 1;
    let max = 100;
    this.setState({computerNumber: Math.floor(Math.random() * (max-min + 1)) + min});
  }

  generateRandomNumber(e) {
    e.preventDefault();
    let {min, max} = this.state;
    let randomNumber = Math.floor(Math.random() * (max-min + 1)) + min;
    this.setState({computerNumber: randomNumber});
  }

  clearInput(e) {
    e.preventDefault();
    this.setState({guess:''});
  }

  resetGame(e) {
    e.preventDefault();
    this.generateRandomNumber(e);
    this.setState({min:1, max:100});
    this.setState({
      lastGuess: '',
      guess: ''
    });
  }

  compareGuess() {
    let guess = this.state.guess;
    let random = this.state.computerNumber;
    let min = this.state.min;
    let max = this.state.max;
    if (guess >= max|| guess <= min) {
    this.setState({message: 'Please enter a number between '+min+' and '+max});
    } else if (guess > random) {
      this.setState({message: 'Sorry, that guess is too high. Try a lower number.'});
    } else if (guess < random) {
      this.setState({message: 'Sorry, that guess is too low. Try a higher number.'});
    } else if (guess === random) {
      this.setState({message: 'Yay! You got it'});
      this.setState({min: this.state.min - 10, max: this.state.max + 10});
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

          <input type='number'
                placeholder='enter your min'
                value={this.state.min}
                onChange={(e)=>this.setState({min: parseInt(e.target.value)})} />

          <input type='number'
                placeholder='enter your max'
                value={this.state.max}
                onChange={(e)=>this.setState({max: parseInt(e.target.value)})} />

          <button disabled={!(this.state.max && this.state.min)}
           onClick={(e)=>this.generateRandomNumber(e)}>Sumbit Max/Min</button>

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
