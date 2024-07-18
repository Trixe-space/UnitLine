#!usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
let formulas = {
    'km': 1000,
    'hm': 100,
    'dam': 10,
    'm': 1,
    'dm': 0.1,
    'cm': 0.01,
    'mm': 0.001,
    'um': 0.000001,
    'nm': 0.000000001
};
//TODO better error messages
const convert = (unitFrom, unitTo, value) => {
    if (!(unitFrom in formulas)) {
        console.log('Invalid unit to convert from');
    }
    else {
        if (!(unitTo in formulas)) {
            console.log('Invalid unit to convert to');
        }
        else {
            return (value * formulas[unitFrom]) / formulas[unitTo];
        }
    }
};
exports.convert = convert;
