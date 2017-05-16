var React = require('react');

// for components that do no require maintaining state,
// you can use arrow functions. Available in React > 14?
var About = (props) => {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather application built on React. I have built this for the Complete React Web Developer Course</p>
        <p>Here are some of the tools I used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a>
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a>
          </li>
        </ul>
      </div>
    )
};

module.exports = About;
