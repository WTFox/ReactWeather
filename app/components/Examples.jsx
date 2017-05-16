var React = require('react');

// for components that do no require maintaining state,
// you can use arrow functions. Available in React > 14?
var Examples = (props) => {
    return (
      <div>
        <h3>Examples</h3>
        <p>Welcome to the examples page</p>
      </div>
    )
};

module.exports = Examples;
