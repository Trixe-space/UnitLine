#!/usr/bin/env node
"use strict";
let input = process.argv;
let unitType = input[2].slice(1);
let currentUnit = input[3].split('-')[0];
let convertedUnit = input[3].split('-')[1];
let value = parseFloat(input[4]);
console.log(unitType, currentUnit, convertedUnit, value);
