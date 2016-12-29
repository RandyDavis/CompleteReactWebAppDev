var GreeterMessage = React.createClass({
   render: function () {
       return (
            <div>
                <h1>Some H1</h1>
                <p>Some paragraph</p>
            </div>
       );
   }
});

var GreeterForm = React.createClass({
    render: function () {
        return (
            <form>
                <input type="text" ref="name" placeholder="Static Form Component"/>
                <button>Set Name</button>
            </form>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            msg: 'This is from a component!'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name
        };
    },
    onButtonClick: function (e) {
        e.preventDefault();

        var nameRef = this.refs.name;

        var name = nameRef.value;
        nameRef.value = "";

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            });
        }

    },
    render: function () {
        var name = this.state.name;
        var msg = this.props.msg;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{msg}</p>

                <GreeterMessage />
                <GreeterForm />

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

var firstName = 'Randy';
var msgText = 'React component text from a message prop!';

ReactDOM.render(
    <Greeter name={firstName} />,
    document.getElementById('app')
);