var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            msg: 'This is from a component!'
        };
    },
    onButtonClick: function (e) {
        e.preventDefault();

        var name = this.refs.name.value;
        alert(name);
    },
    render: function () {
        var name = this.props.name;
        var msg = this.props.msg;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{msg}</p>

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