var React = require('react');
var ReactDom = require('react-dom');

/* Views */
var SearchBox = require('./views/search-box');

var App = React.createClass({
  render: function() {
    return (
      <SearchBox/>
    );
  }
});

ReactDom.render(<App/>, document.getElementById('app'));
