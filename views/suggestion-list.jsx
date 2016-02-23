'use strict';

let React = require('react');

let SuggestionList = React.createClass({

  render() {
    var ulClasses = ['suggestion-list'];
    if (this.props.query === '') {
      ulClasses.push('hidden');
    }
    return (
      <ul className={ulClasses}>
        {this.filterSuggestions()}
      </ul>
    );
  },

  filterSuggestions() {
    var data = [
      'Alexander Rafferty',
      'Jack Scott',
      'Thomas Edison',
      'Albert Einstein',
      'Michael Jackson',
      'David Rafferty',
      'Amanda Rafferty',
      'Taylor Laine'
    ];
    var suggestions = [];
    var query = this.props.query;
    for (var i=0; i<data.length; i++) {
      if (data[i].toLowerCase().indexOf(query.toLowerCase()) != -1) {
        suggestions.push(<li>{this.interpolateSuggestion(data[i], query)}</li>);
      }
    }
    if (suggestions.length === 0) {
      suggestions.push(<li className="no-results">No results were found</li>);
    }
    return suggestions;
  },

  interpolateSuggestion(suggestion, query) {
    if (query == '') return <span>{suggestion}</span>;
    let elements = [''];
    let strleft = suggestion;
    let querylc = query.toLowerCase();
    while (strleft !== '') {
      var found = strleft.substr(0,query.length);
      if (found.toLowerCase() == querylc) {
        elements.push(<strong>{found}</strong>);
        elements.push('');
        strleft = strleft.substr(query.length);
      } else {
        elements[elements.length-1] += strleft[0];
        strleft = strleft.substr(1);
      }
    }
    if (elements[elements.length-1] === '') {
      delete elements[elements.length-1];
    }
    return <span>{elements}</span>;
  }

});

module.exports = SuggestionList;
