'use strict';

var React = require('react/addons');
var LifeCycle = require('./index.js');

var MyComponent = React.createClass({
  displayName: 'MyComponent',

  mixins: [LifeCycle],

  render: function(){
    console.log('render');
    return null;
  }
});

React.render(<MyComponent />, document.body);
React.unmountComponentAtNode(document.body);
React.render(<MyComponent />, document.body);
React.render(<MyComponent />, document.body);
