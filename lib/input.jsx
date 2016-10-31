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
      return 'too high.'
    } else if (this.state.guess < this.state.computerNumber.randomNumber) {
      return 'too low.'
    }
  }

  compareShorten() {
        if (this.state.guess > this.state.computerNumber.randomNumber) {
        return 'lower'
      } else if (this.state.guess < this.state.computerNumber.randomNumber) {
        return 'higher'
      }
    }


  render() {
    let tooHighLow = this.compareGuess();
    let nextGuessHint = this.compareShorten();
    return (
      <div>
        <h2>your last guess was {this.state.lastGuess}</h2>
        <h3 id='message'>Sorry, that guess is {tooHighLow} Try a {nextGuessHint} number.</h3>
        <form>
          <input type='number'
                placeholder='guess a number'
                value={this.state.guess}
                onChange={(e)=>this.setState({guess: parseInt(e.target.value, 10)})} />
          <button onClick={()=>this.handleClick()}>Guess</button>
          <button onClick={()=>this.clearInput()}>Clear</button>
          <button onClick={()=>this.resetGame()}>Reset</button>
        </form>
      </div>
    );
  }
}



module.exports = GuessInputFields;
