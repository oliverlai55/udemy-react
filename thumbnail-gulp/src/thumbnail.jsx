
var React = require('react');
var Badge = require('./badge');
//we have to tell where to require the file
//need to specify path file directory for browserify

module.exports = React.createClass({
  render: function(){
    return (
      <div className="thumbnail">
    <img src={this.props.imageUrl} />
    <div class="caption">
    <h3>{this.props.header}</h3>
    <p>{this.props.description}</p>
    <p>
    <Badge title={this.props.title} number={this.props.number} />
    </p>
    </div>
    </div>
  )
  }
});
