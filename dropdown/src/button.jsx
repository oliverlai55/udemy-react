//converts to vanilla js
//define a react component class

var React = require('react');
module.exports = React.createClass({
  render: function(){

    //make sure to use className
    return (
      <button className={"btn " + this.props.className} type="button">
    {this.props.title} <span className={this.props.subTitleClassName}> {this.props.subTitle} </span>
    </button>
  );
  }
});
