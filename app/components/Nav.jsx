var React = require('react');
var {Link, IndexLink} = require('react-router');

// for components that do no require maintaining state,
// you can use arrow functions. Available in React > 14?
var Nav = (props) => {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
        <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
      </div>
    );
}

module.exports = Nav;
