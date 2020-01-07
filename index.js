#! /usr/bin/env node

const fs = require('fs');

const program = require('commander');
const shell = require('shelljs');

let input, output;
function setArgs(i, o) {
    input = i;
    output = o;
}

program
    .option('--no-palette', 'Do not build custom palette')
    .option('-y, --yes', 'Override output files without asking')
    .option('-s, --start <time>', 'Start time')
    .option('-t, --to <time>', 'End time')
    .option('-r, --frame-rate <fps>', 'Set frame rate (Hz value, fraction or abbreviation)', '10')
    .arguments('<input> <output>')
    .action(setArgs)
    .name('v2gif')
    .usage('[global options] <input> <output>')
    .description('Convert video to gif using ffmpeg.')
    .version('0.0.1');

program.parse(process.argv);

if (!input) {
    console.error('Input not given');
    program.help();
}
if (!output) {
    console.error('Output not given');
    program.help();
}

let ffmpegPalette = `-filter_complex "fps=10,palettegen[p];[0:v][p]paletteuse"`;
let ffmpegYes = '-y';
let ffmpegStart = `-ss "${program.start}"`;
let ffmpegEnd = `-to "${program.to}"`;
let ffmpegRate = `-r "${program.frameRate}"`
let ffmpegFormat = '-f gif';
let ffmpegInput = `-i "${input}"`;
let ffmpegOutput = `"${output}"`;

let ffmpegCmd = ['ffmpeg'];
if (program.start) {
    ffmpegCmd.push(ffmpegStart);
}
if (program.to) {
    ffmpegCmd.push(ffmpegEnd);
}
ffmpegCmd.push(ffmpegInput);
if (program.palette) {
    ffmpegCmd.push(ffmpegPalette);
}
ffmpegCmd.push(ffmpegRate);
ffmpegCmd.push(ffmpegFormat);
if (program.yes) {
    ffmpegCmd.push(ffmpegYes);
}
ffmpegCmd.push(ffmpegOutput);


const code = shell.exec(ffmpegCmd.join(' '));
process.exit(code);

