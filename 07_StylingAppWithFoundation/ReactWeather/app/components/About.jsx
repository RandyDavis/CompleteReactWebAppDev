var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>React Weather is all about bringing you up to the minute weather in your area.</p>
            <p>
                We are powered by the following tools:
            </p>
            <hr/>
            <ul>
                <li>
                    <a href='https://facebook.github.io/react/'><em>ReactJS</em></a> - One of the fastest JavaScript Libraries used.
                </li>
                <li>
                    <a href="http://openweathermap.org"><em>Open Weather Map</em></a> - An excellent API for all your weather-related needs.
                </li>
            </ul>

        </div>
    );
};

module.exports = About;