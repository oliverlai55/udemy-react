var options = {

  thumbnailData: [{
    title: 'See Tutorials',
    number: 32,
    header: 'Learn React',
    description: "Reach is fantastic new library",
    imageUrl: 'https://facebook.github.io/react/img/logo.svg'
  },{
    title: 'See Tutorials',
    number: 25,
    header: 'Learn Gulp',
    description: "Gulp will speed up workflow",
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]

};

//ask react to render this class
var element = React.createElement(ThumbnailList, options);
ReactDOM.render(element, document.querySelector('.target'));
//when we ask react to render this class, we will tel lit where
//to place the rendered element in the dom

//converts to vanilla js
//define a react component class
var Badge = React.createClass({displayName: "Badge",
  render: function(){

    //make sure to use className
    return (React.createElement("button", {className: "btn btn-primary", type: "button"}, 
    this.props.title, " ", React.createElement("span", {className: "badge"}, " ", this.props.number, " ")
    )
  )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      //list is the array of thumbnail instances
      return ( React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
      //take entire oobject and passing it in, the entire thmbnail instances
    )
    });

    return ( React.createElement("div", null, 
      list
     )
   )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return
    (React.createElement("div", {className: "thumbnail"}, 
    React.createElement("img", {src: this.props.imageUrl}), 
    React.createElement("div", {class: "caption"}, 
    React.createElement("h3", null, this.props.header), 
    React.createElement("p", null, this.props.description), 
    React.createElement("p", null, 
    React.createElement(Badge, {title: this.props.title, number: this.props.number})
    )
    )
    )
  )
  }
});
