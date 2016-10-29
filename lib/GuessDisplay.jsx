const React = require('react');
const guess = require('./input');

class GuessField extends React.Component {



render() {
  return (

      <h2>Your last guess was {this.props.guess}</h2>
  );
}



}

module.exports = GuessField;
