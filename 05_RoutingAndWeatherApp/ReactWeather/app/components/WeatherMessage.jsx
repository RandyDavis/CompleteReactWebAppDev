var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        var {temp, location} = this.props;
        // var location = this.props.location;
        // var temp = this.props.temp;
        return (
            <p>It is {temp} degrees in {location}.</p>
        );
    }
});

module.exports = WeatherMessage;