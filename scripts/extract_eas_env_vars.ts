// Write a script that given a profile name  as an arugment
// reads the eas.json file an prints the env key value pairs so it can
// be used to set environment variables in the shell or by adding to $GITHUB_ENV file

import fs from 'fs';
import path from 'path';

const profile = process.argv[2];
const easJsonPath = path.join(process.cwd(), 'eas.json');
const easJson = JSON.parse(fs.readFileSync(easJsonPath, 'utf8'));

const env = easJson.build[profile].env;
for (const key in env) {
  console.log
  (`${key}=${env[key]}`);
}
