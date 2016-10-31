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

  generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
  }

  handleClick() {
    let randomNumber = this.generateRandomNumber(0, 100);
    this.setState({lastGuess: this.state.guess});
    this.setState({guess:''});
    this.setState({computerNumber: {randomNumber} });
  }

  clearInput() {
    this.setState({guess:''});
  }

  resetGame() {
    this.setState({
      computerNumber: '',
      lastGuess: '',
      guess: ''
    })
  }


  compareGuess() {
      if (this.state.guess > this.state.computerNumber.randomNumber) {
      return 'too high'
    } else if (this.state.guess < this.state.computerNumber.randomNumber) {
      return 'too low'
    } else if (this.state.guess === this.state.computerNumber.randomNumber) {
      return 'perfect';
    }
  }

  render() {

    let displayMessaage = this.compareGuess();
    return (
      <div>
        <h2>your last guess was {this.state.lastGuess}</h2>
        <h3>your guess was {displayMessaage}!</h3>
        <input type='number' value={this.state.guess}
            placeholder='guess a number'
            onChange={(e)=>this.setState({guess: parseInt(e.target.value, 10)})} />
        <button onClick={()=>this.handleClick()}>Guess</button>
        <button onClick={()=>this.clearInput()}>Clear</button>
        <button onClick={()=>this.resetGame()}>Reset</button>

      </div>
    );
  }
}


module.exports = GuessInputFields;
