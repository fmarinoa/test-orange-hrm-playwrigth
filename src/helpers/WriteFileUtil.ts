import * as fs from 'fs';
import { Constants } from './constants';

export function writeStartTime(): void {
    fs.writeFileSync(`./${Constants.TARGET}/startTime.txt`, new Date().toISOString());
}

export function writeEndTime(): void {
    fs.writeFileSync(`./${Constants.TARGET}/endTime.txt`, new Date().toISOString());
}

export function writeBrowserInfo(browserName: string, version: string): void {
    fs.writeFileSync(
        `./${Constants.TARGET}/browserInfo.json`,
        JSON.stringify({ name: browserName, version: version }, null, 2),
    );
}