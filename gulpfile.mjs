import gulp from 'gulp';
import { deleteAsync } from 'del';
import babel from 'gulp-babel';
import ts from 'gulp-typescript';

// Clean build directories
gulp.task('clean', async () => {
  await Promise.all([
    deleteAsync('dist'),
    deleteAsync('esm'),
    deleteAsync('lib')
  ]);
});

// Build ESM format
gulp.task('esm', () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });

  return tsProject.src()
    .pipe(tsProject())
    .pipe(babel())
    .pipe(gulp.dest('esm/'));
});

// Build CommonJS format
gulp.task('cjs', () => {
  return gulp.src(['./esm/**/*.js'])
    .pipe(babel({
      configFile: '../../.babelrc',
    }))
    .pipe(gulp.dest('lib/'));
});

// Generate type declaration files
gulp.task('declaration', () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true
  });

  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('esm/'))
    .pipe(gulp.dest('lib/'));
});

// Copy README file
gulp.task('copyReadme', () => {
  return gulp.src('../../README.md')
    .pipe(gulp.dest('../../packages/hooks'));
});

// Build task workflow
const build = gulp.series(
  'clean',
  'esm',
  'cjs',
  'declaration',
  'copyReadme'
);

export default build;
