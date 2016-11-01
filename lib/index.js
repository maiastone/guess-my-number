const React = require('react');
const ReactDOM = require('react-dom');
const GuessInputFields = require('./input');
require('./style');

class Application extends React.Component {

  render() {
    return (
      <div>
        <GuessInputFields />
      </div>
    );
  }
}



ReactDOM.render(<Application />, document.querySelector('.application'));
