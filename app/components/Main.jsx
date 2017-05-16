var React = require('react');
var Nav = require('Nav');

// for components that do no require maintaining state,
// you can use arrow functions. Available in React > 14?
var Main = (props) => {
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {props.children}
          </div>
        </div>
      </div>
    );
}

module.exports = Main;
