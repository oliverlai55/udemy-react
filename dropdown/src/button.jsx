//converts to vanilla js
//define a react component class

var React = require('react');
module.exports = React.createClass({
  handleClick: function(){
    alert('button clicked');
  },
  render: function(){

    //make sure to use className
    return (
      //runs function handleClick()
      <button onClick={this.handleClick} className={"btn " + this.props.className} type="button">
    {this.props.title} <span className={this.props.subTitleClassName}> {this.props.subTitle} </span>
    </button>
  );
  }
});
