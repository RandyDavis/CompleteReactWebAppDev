var React = require('react');

var WeatherMessage = ({temp, location}) => {
    // var location = props.location;
    // var temp = props.temp;
    return (
        <h3 className="text-center">It is {temp} degrees in {location}.</h3>
    );
}

module.exports = WeatherMessage;