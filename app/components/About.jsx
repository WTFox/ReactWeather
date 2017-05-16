var React = require('react');

// for components that do no require maintaining state,
// you can use arrow functions. Available in React > 14?
var About = (props) => {
    return (
      <div>
        <h3>About</h3>
        <p>Welcome to the about page!</p>
      </div>
    )
};

module.exports = About;
