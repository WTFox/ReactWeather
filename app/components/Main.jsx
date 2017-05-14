var React = require('react');
var Nav = require('Nav');

// for components that do no require maintaining state,
// you can use arrow functions. Available in React > 0.14?
var Main = (props) => {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {props.children}
      </div>
    );
}

module.exports = Main;
