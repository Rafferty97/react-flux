var React = require('react');

/* Views */
var SuggestionList = require('./suggestion-list');

var SearchBox = React.createClass({

  getInitialState: function() {
    return {
      query: ''
    };
  },

  render: function() {
    return (
      <div className="searchbox">
        <input value={this.state.query} onChange={this._onChange} />
        <SuggestionList query={this.state.query.trim()} />
      </div>
    );
  },

  _onChange: function(event) {
    this.setState({
      query: event.target.value
    });
  }

});

module.exports = SearchBox;
