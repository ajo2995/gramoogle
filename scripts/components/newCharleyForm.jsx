'use strict';

var React = require('react');
var CharleyActions = require('../actions/charleyActions');

var NewCharleyForm = React.createClass({
  handleNewCharley: function (e) {
    var whatCharleySays = this.refs.newCharleySays.getDOMNode();
    e.preventDefault();
    CharleyActions.addCharley(whatCharleySays.value.trim());
    whatCharleySays.value = '';
  },
  render: function() {
    return (
      <form ref="newCharleyForm" onSubmit={this.handleNewCharley}>
        <label htmlFor="newCharleySays">What should Charley say&#63;</label>
        <input type="text" ref="newCharleySays" placeholder="React" />
        <button>New Charley</button>
      </form>
    );
  }
});

module.exports = NewCharleyForm;