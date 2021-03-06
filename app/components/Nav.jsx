var React = require('react');
var {Link, IndexLink} = require('react-router');

// for components that do no require maintaining state,
// you can use arrow functions. Available in React > 14?
var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);
    if (location.length > 0) {
      this.refs.location.value = "";
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              ReactWeatherApp
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
            </li>
            <li>
              <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input ref="location" type="search" placeholder="Search weather by city" />
              </li>
              <li>
                <input ref="search" type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
