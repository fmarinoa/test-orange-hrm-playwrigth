import * as os from 'os';
import * as fs from 'fs';

import { Constants } from './constants';

const report = require('multiple-cucumber-html-reporter');

function readText(path: string, fallback: string) {
  try {
    return fs.readFileSync(path, 'utf-8');
  } catch {
    return fallback;
  }
}

let browserInfo = { name: 'unknown', version: 'unknown' };
try {
  browserInfo = JSON.parse(readText(`./${Constants.TARGET}/browserInfo.json`, '{}'));
} catch { }

const startTime = new Date(readText(`./${Constants.TARGET}/startTime.txt`, 'N/A')).toLocaleString();
const endTime = new Date(readText(`./${Constants.TARGET}/endTime.txt`, 'N/A')).toLocaleString();

report.generate({
  jsonDir: `./${Constants.TARGET}/cucumber/`,
  reportPath: `./${Constants.TARGET}/report/`,
  metadata: {
    browser: {
      name: browserInfo.name,
      version: browserInfo.version,
    },
    device: os.hostname(),
    platform: {
      name: os.platform(),
      version: os.release(),
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Custom project' },
      { label: 'Release', value: '1.2.3' },
      { label: 'Cycle', value: 'B11221.34321' },
      { label: 'Execution Start Time', value: startTime },
      { label: 'Execution End Time', value: endTime },
    ],
  },
});
