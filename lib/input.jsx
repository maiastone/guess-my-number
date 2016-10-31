const React = require('react');


class GuessInputFields extends React.Component {
  constructor() {
    super();
    this.state = {
      guess: ''
    }
  }


  handleClick() {
    this.setState({lastGuess: this.state.guess});
    this.setState({guess:''});
  }


  render() {
    return (
      <div>
        <input type='number' value={this.state.guess}
            placeholder='guess a number'
            onChange={(e)=>this.setState({guess: parseInt(e.target.value, 10)})} />
        <button onClick={()=>this.handleClick()}>Guess</button>
        <button onClick={()=>this.setState({guess:''})}>Clear</button>
        <button onClick={()=>this.handleClick()}>Reset</button>

      </div>
    );
  }



}

module.exports = GuessInputFields;
