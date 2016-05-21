
var React = require('react');
var Thumbnail = require('./thumbnail');
//go find module in project with file name of thumbnail and assign
//to var Thumbnail



module.exports = React.createClass({
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      //list is the array of thumbnail instances
      return (
        <Thumbnail {...thumbnailProps}/>
      //take entire oobject and passing it in, the entire thmbnail instances
    )
    });

    return (
      <div>
      {list}
     </div>
   )
  }
});
