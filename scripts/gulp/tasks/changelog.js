import gulp from 'gulp';
import conventionalChangelog from 'gulp-conventional-changelog';

// taken from Angular's tools
// https://github.com/angular/angular/blob/master/tools/gulp-tasks/changelog.js
gulp.task('changelog', () => {

  return gulp.src('CHANGELOG.md')
    .pipe(conventionalChangelog({preset: 'angular', releaseCount: 1}, {
      // Conventional Changelog Context
      // We have to manually set version number so it doesn't get prefixed with `v`
      // See https://github.com/conventional-changelog/conventional-changelog-core/issues/10
      currentTag: require('../../../package.json').version
    }))
    .pipe(gulp.dest('./'));

});