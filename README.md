# Gerbis (Gerber Toolkit)

Simple toolkit for working with PCB Gerber files (and associated drill files).

[Gerber Job File Specification](https://www.ucamco.com/files/downloads/file_en/209/the-gerber-job-format-specification-technical-manual_en.pdf)
[Gerber Layer Specification](https://www.ucamco.com/files/downloads/file_en/456/gerber-layer-format-specification-revision-2022-02_en.pdf?7b3ca7f0753aa2d77f5f9afe31b9f826)
[Official Gerber Test Files](https://www.ucamco.com/en/gerber/downloads)

## Installation

`npm install gerbis`

## Usage

```ts
import { parseGerber } from "gerbis"

parseGerber(`
G04 Ucamco ex. 1: Two square boxes*
%MOMM*%
%FSLAX26Y26*%
%TF.Part,Other,example*%
%LPD*%
%ADD10C,0.010*%
D10*
X0Y0D02*
M02*
`)
/*
[
  { command_code: 'G04', comment: ' Ucamco ex. 1: Two square boxes' },
  { command_code: 'MO', unit: 'MM' },
  {
    command_code: 'FS',
    x_integer_digits: 2,
    x_fractional_digits: 2,
    y_integer_digits: 2,
    y_fractional_digits: 6
  },
  { command_code: 'TF', name: '.Part', values: [Array] },
  { command_code: 'LP', setting: 'dark' },
  {
    command_code: 'AD',
    aperture_identifier: 'D10',
    type: 'circle',
    diameter: 0.01
  },
  { command_code: 'Dnn', aperture_identifier: 'D10' },
  { command_code: 'D02', x: 0, y: 0 },
  { command_code: 'M02' }
]
*/
```
