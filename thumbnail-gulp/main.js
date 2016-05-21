(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Oliver/Desktop/React/udemy-react/thumbnail-gulp/src/app.jsx":[function(require,module,exports){
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

},{}]},{},["/Users/Oliver/Desktop/React/udemy-react/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvT2xpdmVyL0Rlc2t0b3AvUmVhY3QvdWRlbXktcmVhY3QvdGh1bWJuYWlsLWd1bHAvc3JjL2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLE9BQU8sR0FBRzs7RUFFWixhQUFhLEVBQUUsQ0FBQztJQUNkLEtBQUssRUFBRSxlQUFlO0lBQ3RCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsTUFBTSxFQUFFLGFBQWE7SUFDckIsV0FBVyxFQUFFLGdDQUFnQztJQUM3QyxRQUFRLEVBQUUsK0NBQStDO0dBQzFELENBQUM7SUFDQSxLQUFLLEVBQUUsZUFBZTtJQUN0QixNQUFNLEVBQUUsRUFBRTtJQUNWLE1BQU0sRUFBRSxZQUFZO0lBQ3BCLFdBQVcsRUFBRSw2QkFBNkI7SUFDMUMsUUFBUSxFQUFFLDREQUE0RDtBQUMxRSxHQUFHLENBQUM7O0FBRUosQ0FBQyxDQUFDOztBQUVGLGdDQUFnQztBQUNoQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxRCxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDNUQsK0RBQStEO0FBQy9ELDBDQUEwQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgb3B0aW9ucyA9IHtcblxuICB0aHVtYm5haWxEYXRhOiBbe1xuICAgIHRpdGxlOiAnU2VlIFR1dG9yaWFscycsXG4gICAgbnVtYmVyOiAzMixcbiAgICBoZWFkZXI6ICdMZWFybiBSZWFjdCcsXG4gICAgZGVzY3JpcHRpb246IFwiUmVhY2ggaXMgZmFudGFzdGljIG5ldyBsaWJyYXJ5XCIsXG4gICAgaW1hZ2VVcmw6ICdodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9pbWcvbG9nby5zdmcnXG4gIH0se1xuICAgIHRpdGxlOiAnU2VlIFR1dG9yaWFscycsXG4gICAgbnVtYmVyOiAyNSxcbiAgICBoZWFkZXI6ICdMZWFybiBHdWxwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJHdWxwIHdpbGwgc3BlZWQgdXAgd29ya2Zsb3dcIixcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vYXZhdGFyczAuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjIwMDYyND92PTMmcz00MDAnXG4gIH1dXG5cbn07XG5cbi8vYXNrIHJlYWN0IHRvIHJlbmRlciB0aGlzIGNsYXNzXG52YXIgZWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGh1bWJuYWlsTGlzdCwgb3B0aW9ucyk7XG5SZWFjdERPTS5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpKTtcbi8vd2hlbiB3ZSBhc2sgcmVhY3QgdG8gcmVuZGVyIHRoaXMgY2xhc3MsIHdlIHdpbGwgdGVsIGxpdCB3aGVyZVxuLy90byBwbGFjZSB0aGUgcmVuZGVyZWQgZWxlbWVudCBpbiB0aGUgZG9tXG4iXX0=
