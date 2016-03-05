var gulp = require('gulp');
var fs = require('fs');
var tasks = fs.readdirSync('./tasks');

tasks.forEach(function (task) {
    var name = task.split('.')[0];
    gulp.task(name, require('./tasks/' + task));
});

gulp.task('build', ['browserify']);

gulp.task('default', ['build']);
