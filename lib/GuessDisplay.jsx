const React = require('react');



class GuessDisplay extends React.Component {


// let result;
//   if (this.props.lastGuess > this.props.computerNumber) {
//     result = 'too high';
//   }


render() {
  return (
    <div>
      <h2>Your last guess was {this.props.lastGuess}</h2>
      <h3>That number is {} - Guess again. </h3>
    </div>
  );
}



}

module.exports = GuessDisplay;
