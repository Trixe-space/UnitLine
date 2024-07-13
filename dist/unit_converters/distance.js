#!usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNanometer = exports.toMicrometer = exports.toMillimeter = exports.toCentimeter = exports.toDecimeter = exports.toDecameter = exports.toHectometer = exports.toKilometer = exports.toMeter = void 0;
//TODO Rework this
const console_1 = require("console");
const toMeter = (currentUnit, value) => {
    const toMeterFormulas = new Map([
        ['km', value * 1000],
        ['hm', value * 100],
        ['dam', value * 10],
        ['m', value],
        ['dm', value / 10],
        ['cm', value / 100],
        ['mm', value / 1000],
        ['um', value / 1000000],
        ['nm', value / 1000000000]
    ]);
    if (!toMeterFormulas.has(currentUnit)) {
        throw (0, console_1.error)(`${currentUnit} is not a valid unit`);
    }
    return toMeterFormulas.get(currentUnit);
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
