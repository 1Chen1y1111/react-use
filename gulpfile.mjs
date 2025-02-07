import gulp from 'gulp';
import { deleteAsync } from 'del';
import babel from 'gulp-babel';
import ts from 'gulp-typescript';

// clean
gulp.task('clean', async () => {
  await deleteAsync('dist');
  await deleteAsync('es');
  await deleteAsync('lib');
});

// esm
gulp.task('esm', () => {
  const tsp = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });

  return tsp.src().pipe(tsp()).pipe(babel()).pipe(gulp.dest('esm/'));
});

// cjs
gulp.task('cjs', () => {
  return gulp
    .src(['./esm/**/*.js'])
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

const build = gulp.series('clean', 'esm', 'cjs');

export default build;
