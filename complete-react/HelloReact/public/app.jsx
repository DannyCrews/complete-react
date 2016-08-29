var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is a default prop',
    };
  },

  onButtonClick: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;

    alert(name);
  },

  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <div>
          <h1>Hello {name}!</h1>
          <p>{message + '!!'}</p>
        </div>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
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
