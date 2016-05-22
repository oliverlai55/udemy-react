var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', //what should show up on the button to open/close dropdown
  items: [//list of items to show on dropdown
    'Apple Pie',
    'Peach Cobbier',
    'Coconut Cream Pie'
  ]
};

//ask react to render this class
var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
//when we ask react to render this class, we will tel lit where
//to place the rendered element in the dom
