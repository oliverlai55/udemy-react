var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src('src/**')
    .pipe(react())
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./'));
    //first do this, then do this, next step (pipe)
});

var gulp = require('gulp');
var gutil = require('gulp-util');
//console logging in command line while process is running
var source = require('vinyl-source-stream');
//handling text files from one to another
var browserify = require('browserify');
//figuring out what part of code depends on other parts of code,
//load order is correctly
var watchify = require('watchify');
//view run gulp file when code changes
var reactify = require('reactify');
//working in conjunction with browserify changing jsx files in js

gulp.task('default', function(){
  //run browserfiy
  var bundler = watchify(browserifiy({
    //going to look for 'how' to apply to pages
    entries: []
  }))
});
