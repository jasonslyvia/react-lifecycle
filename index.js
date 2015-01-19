'use strict';

var ReactLifeCycle = {
  getInitialState: function(){
    console.log('getInitialState');
    return {};
  },

  getDefaultProps: function(){
    console.log('getDefaultProps');
    return {};
  },

  componentWillMount: function(){
    console.log('componentWillMount');
  },

  componentDidMount: function(){
    console.log('componentDidMount');
  },

  componentWillReceiveProps: function(){
    console.log('componentWillReceiveProps');
  },

  shouldComponentUpdate: function(){
    console.log('shouldComponentUpdate');
    return true;
  },

  componentWillUpdate: function(){
    console.log('componentWillUpdate');
  },

  componentDidUpdate: function(){
    console.log('componentDidUpdate');
  },

  componentWillUnmount: function(){
    console.log('componentWillUnmount');
  }
};

module.exports = ReactLifeCycle;
