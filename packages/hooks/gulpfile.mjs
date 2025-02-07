import build from '../../gulpfile.mjs';
import gulp from 'gulp';
// // import fs from 'node:fs';
// // import fse from 'fs-extra';
// // import fg from 'fast-glob';
// // import gm from 'gray-matter';

const _build = gulp.series(build);
export default _build;
