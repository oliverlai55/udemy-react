//converts to vanilla js
//define a react component class

var React = require('react');
module.exports = React.createClass({
  render: function(){

    //make sure to use className
    return (
      <button className="btn btn-primary" type="button">
    {this.props.title} <span className="badge"> {this.props.number} </span>
    </button>
  );
  }
});
