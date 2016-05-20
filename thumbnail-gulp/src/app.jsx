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
