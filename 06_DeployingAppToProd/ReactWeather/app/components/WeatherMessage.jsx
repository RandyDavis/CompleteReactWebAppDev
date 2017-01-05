var React = require('react');

var WeatherMessage = ({temp, location}) => {
    // var location = props.location;
    // var temp = props.temp;
    return (
        <p>It is {temp} degrees in {location}.</p>
    );
}

module.exports = WeatherMessage;