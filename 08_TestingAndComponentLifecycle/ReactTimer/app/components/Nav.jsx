var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () =>{
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link" activeStyle={{ fontWeight: 'bold' }}>Timer</IndexLink>
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link" activeStyle={{ fontWeight: 'bold' }}>Countdown</IndexLink>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="http://github.com/RandyDavis" target="_blank">Randy Davis</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

module.exports = Nav;