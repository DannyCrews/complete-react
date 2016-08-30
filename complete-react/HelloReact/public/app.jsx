var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = 'Dan';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
