#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const distanceConverters = __importStar(require("./unit_converters/distance"));
let input = process.argv;
let unitType = input[2].slice(1);
let currentUnit = input[3].split('-')[0];
let convertedUnit = input[3].split('-')[1];
let value = parseFloat(input[4]);
const distanceUnitList = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm', 'um', 'nm'];
let distanceConverter = new Map([
    ['km', distanceConverters.toKilometer(currentUnit, value)],
    ['hm', distanceConverters.toHectometer(currentUnit, value)],
    ['dam', distanceConverters.toDecameter(currentUnit, value)],
    ['m', distanceConverters.toMeter(currentUnit, value)],
    ['dm', distanceConverters.toDecimeter(currentUnit, value)],
    ['cm', distanceConverters.toCentimeter(currentUnit, value)],
    ['mm', distanceConverters.toMillimeter(currentUnit, value)],
    ['um', distanceConverters.toMicrometer(currentUnit, value)],
    ['nm', distanceConverters.toNanometer(currentUnit, value)]
]);
switch (unitType) {
    case 'distance':
        if (distanceConverter.has(convertedUnit)) {
            console.log(`${value + currentUnit} -> ${distanceConverter.get(convertedUnit) + convertedUnit}`);
        }
        else {
            (0, console_1.error)('Not a valid unit');
        }
}
