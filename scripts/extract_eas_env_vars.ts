// Extract env variables from eas.json for a specific profile
// Usage: ts-node scripts/extract_eas_env_vars.ts <profile> $GITHUB_ENV
// For more info see:
//   - https://docs.expo.dev/guides/environment-variables/#eas-build
//   - https://docs.expo.dev/guides/environment-variables/#eas-update
//   - https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions#environment-files

import fs from 'fs';
import path from 'path';

if (process.argv.length < 4) {
  console.error('Usage: ts-node scripts/extract_eas_env_vars.ts <profile> $GITHUB_ENV');
  process.exit(1);
}

const profile = process.argv[2];
const envfile = process.argv[3];
const easJsonPath = path.join(process.cwd(), 'eas.json');
console.log("easJsonPath", easJsonPath);
const easJson = JSON.parse(fs.readFileSync(easJsonPath, 'utf8'));

const env = easJson.build[profile].env;
const variables: string[] = []
for (const key in env) {
  variables.push(key);
  fs.appendFileSync(envfile, `${key}=${env[key]}\n`);
}

console.log(`Variables ${variables.join(', ')} extracted from eas.json for profile ${profile} into ${envfile}`);
