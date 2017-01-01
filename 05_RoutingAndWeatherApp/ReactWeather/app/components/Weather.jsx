var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Austin',
            temp: 81
        }
    },
    handleSearch: function (location) {
        this.setState({
            location: location,
            temp: 23
        });
    },
    render: function () {
        var {temp, location} = this.state; // ES6 Destructuring; Does same as 2 commented lines below
        // var location = this.state.location;
        // var temp = this.state.temp;
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={location} temp={temp}/>
            </div>
        );
    }
});

module.exports = Weather;