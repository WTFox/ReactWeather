var React = require('react');
var {Link} = require('react-router');

// for components that do no require maintaining state,
// you can use arrow functions. Available in React > 14?
var Examples = (props) => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to="/?location=Nashville">Nashville, TN</Link>
          </li>
          <li>
            <Link to="/?location=Orange%20County">Orange County, CA</Link>
          </li>
        </ol>
      </div>
    )
};

module.exports = Examples;
