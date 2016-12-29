var GreeterMessage = React.createClass({
   render: function () {
       var name = this.props.name;
       var msg = this.props.msg;
       return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{msg}</p>
            </div>
       );
   }
});

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var msg = this.refs.msg.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if (msg.length > 0) {
            this.refs.msg.value = '';
            updates.msg = msg;
        }
        this.props.onNewData(updates);
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Enter name"/><br/>
                </div>
                <div>
                    <textarea ref="msg" cols="20" rows="2" placeholder="Enter message"></textarea><br/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
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
            name: this.props.name,
            msg: this.props.msg
        };
    },
    handleNewData: function (updates) {
        this.setState(updates);
    },
    render: function () {
        var name = this.state.name;
        var msg = this.state.msg;
        return (
            <div>
                <GreeterMessage name={name} msg={msg}/>
                <GreeterForm onNewData={this.handleNewData} />
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