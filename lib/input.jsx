const React = require('react');


class GuessInputField extends React.Component {
  constructor() {
    super();
      this.state = {
        guess: ''
      };
  }

  handleClick() {
    this.props.passGuess(this.state);
    this.setState({guess:''});
  }


  render() {
    return (
      <div>
        <input type='text' value={this.state.guess}
          placeholder='guess a number'
          onChange={(e)=>this.setState({guess: e.target.value})} />
        <button onClick={()=>this.handleClick()}>Guess</button>
        <button onClick={()=>this.handleClick()}>Clear</button>
      </div>
    );
  }



}

module.exports = GuessInputField;
