const React = require('react');
const ReactDOM = require('react-dom');
const GuessInputFields = require('./input');


class Application extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <GuessInputFields />
      </div>
    );
  }
}


// TODO move this 
ReactDOM.render(<Application />, document.querySelector('.application'));
