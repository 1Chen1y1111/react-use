import build from '../../gulpfile.mjs';
import gulp from 'gulp';
import fs from 'node:fs';
import fse from 'fs-extra';
import fg from 'fast-glob';
import gm from 'gray-matter';

// Extract description from markdown file
async function extractDescription(path) {
    if (!fs.existsSync(path)) {
        return '';
    }

    const file = fs.readFileSync(path, 'utf-8');
    const { content } = gm(file);

    // Match first paragraph of description text after title
    const descriptionMatch = content
        .replace(/\r\n/g, '\n')
        .match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m);

    if (!descriptionMatch) {
        return '';
    }

    const description = descriptionMatch[1].trim();
    return description.charAt(0).toLowerCase() + description.slice(1);
}

// Generate hooks metadata
async function generateMetaData() {
    // Get all directories starting with 'use'
    const hookDirs = fg.sync('src/use*', {
        onlyDirectories: true
    }).map(dir => dir.replace('src/', '')).sort();

    // Process all hook directories in parallel
    const results = await Promise.allSettled(
        hookDirs.map(async (hook) => ({
            name: hook,
            description: await extractDescription(`src/${hook}/index.md`)
        }))
    );

    // Filter successful results
    const functions = results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);

    return { functions };
}

// Generate metadata file task
gulp.task('metaData', async () => {
    const metaData = await generateMetaData();
    await fse.writeJson('metaData.json', metaData, { spaces: 2 });
});

const _build = gulp.series(build, 'metaData');

export default _build;
