var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
    name: 'Randy',
    location: 'Austin'
};

var objTwo = {
    age: 36,
    ...objOne
};
console.log(objTwo);

ReactDOM.render(
    <h1>Boilerplate App!</h1>,
    document.getElementById('app')
);