var React = require('react');
var ReactDom = require('react-dom');

/* Views */
var SearchBox = require('./views/search-box');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="page-title">Star Wars API</h1>
        <SearchBox/>
      </div>
    );
  }
});

ReactDom.render(<App/>, document.getElementById('app'));
