var gulp = require('gulp');
var paths = require('./paths');
var fs = require('fs');
var tasks = fs.readdirSync(paths.tasks);

tasks.forEach(function (task) {
    var name = task.split('.')[0];
    gulp.task(name, require(paths.tasks + task));
});

gulp.task('watch', ['server', 'watchify']);

gulp.task('default', ['test', 'build']);
