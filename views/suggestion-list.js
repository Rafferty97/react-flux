'use strict';

let React = require('react');

let SuggestionList = React.createClass({

  render() {
    return (
      <ul>
        <li>{this.interpolateSuggestion('Alexander Rafferty',this.props.query)}</li>
      </ul>
    );
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
