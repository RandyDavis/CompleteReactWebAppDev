var React = require('react');

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

module.exports = GreeterForm;