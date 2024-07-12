#!usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNanometer = exports.toMicrometer = exports.toMillimeter = exports.toCentimeter = exports.toDecimeter = exports.toDecameter = exports.toHectometer = exports.toKilometer = exports.toMeter = void 0;
const toMeter = (currentUnit, value) => {
    switch (currentUnit) {
        case 'km':
            return value * 1000;
        case 'hm':
            return value * 100;
        case 'dam':
            return value * 10;
        case 'dm':
            return value / 10;
        case 'cm':
            return value / 100;
        case 'mm':
            return value / 100;
        case 'um':
            return value / 1000000;
        case 'nm':
            return value / 1000000000;
        default:
            return value;
    }
};
exports.toMeter = toMeter;
const toKilometer = (currentUnit, value) => {
    let newValue = (0, exports.toMeter)(currentUnit, value);
    return newValue / 1000;
};
exports.toKilometer = toKilometer;
const toHectometer = (currentUnit, value) => {
    let newValue = (0, exports.toMeter)(currentUnit, value);
    return newValue / 100;
};
exports.toHectometer = toHectometer;
const toDecameter = (currentUnit, value) => {
    let newValue = (0, exports.toMeter)(currentUnit, value);
    return newValue / 10;
};
exports.toDecameter = toDecameter;
const toDecimeter = (currentUnit, value) => {
    let newValue = (0, exports.toMeter)(currentUnit, value);
    return newValue * 10;
};
exports.toDecimeter = toDecimeter;
const toCentimeter = (currentUnit, value) => {
    let newValue = (0, exports.toMeter)(currentUnit, value);
    return newValue * 100;
};
exports.toCentimeter = toCentimeter;
const toMillimeter = (currentUnit, value) => {
    let newValue = (0, exports.toMeter)(currentUnit, value);
    return newValue * 1000;
};
exports.toMillimeter = toMillimeter;
const toMicrometer = (currentUnit, value) => {
    let newValue = (0, exports.toMeter)(currentUnit, value);
    return newValue * 1000000;
};
exports.toMicrometer = toMicrometer;
const toNanometer = (currentUnit, value) => {
    let newValue = (0, exports.toMeter)(currentUnit, value);
    return newValue / 1000000000;
};
exports.toNanometer = toNanometer;
