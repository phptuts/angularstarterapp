var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var rename = require("gulp-rename");

gulp.task('default', ['uglifyjs']);

gulp.task('uglifyjs', function() {
  
    gulp.src(['bower_components/angular/angular.min.js',
              'bower_components/angular-route/angular-route.min.js',
              'bower_components/angular-resource/angular-resource.min.js',
              'app/shared/services/*.js',
              'app/shared/directives/*.js',
              'src/app/*.js',
              'src/app/controllers/*.js'])  
    .pipe(uglify())                     // Minify
    .pipe(concat("app.js"))             // Combine into 1 file
    .pipe(gulp.dest("build"))            // Write non-minified to disk
    .pipe(rename({extname: ".min.js"})); // Rename to ng-quick-date.min.js
    
    
});


