var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is a default prop',
    };
  },

  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>
      </div>
    );
  },
});

var firstName = 'Dan';
var myMessage = 'This is from a component';

ReactDOM.render(
  <Greeter name={firstName} message={myMessage}/>,
  document.getElementById('app')
);
