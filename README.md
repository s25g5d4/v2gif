# v2gif

Convert video to gif using ffmpeg.

## Install

`npm i -g @s25g5d4/v2gif`

or run it through npx: `npx @s25g5d4/v2gif --help`

## Prerequisite

This script won't install ffmpeg for you. You must have [FFmpeg](https://www.ffmpeg.org/) installed locally. See [Download FFmpeg](https://www.ffmpeg.org/download.html) for more information on how to install FFmpeg.

This script wraps ffmpeg command in a convenient way. Without explicitly setting FFmpeg as dependency would allow you to choose your own FFmpeg binary, and makes everything simple. You can either install FFmpeg from your OS's package repository, build it from scratch, or download prebuilt portable binary and add it to PATH.

## Usage

```
Usage: v2gif [global options] <input> <output>

Convert video to gif using ffmpeg.

Options:
  --no-palette            Do not build custom palette
  -y, --yes               Override output files without asking
  -s, --start <time>      Start time
  -t, --to <time>         End time
  -r, --frame-rate <fps>  Set frame rate (Hz value, fraction or abbreviation)
                          (default: "10")
  -V, --version           output the version number
  -h, --help              output usage information
```

