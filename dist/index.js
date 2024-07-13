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
const distanceConverters = __importStar(require("./unit_converters/distance"));
const messages = __importStar(require("./messages"));
const input = process.argv;
const distanceUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm', 'um', 'nm'];
const output = (unitFrom, value, unitTo, convertedValue) => {
    console.log(`${value + unitFrom} -> ${convertedValue + unitTo}`);
};
const converter = (unitType, unitFrom, unitTo, value) => {
    let convertedValue;
    const distanceConverter = new Map([
        ['km', distanceConverters.toKilometer(unitFrom, value)],
        ['hm', distanceConverters.toHectometer(unitFrom, value)],
        ['dam', distanceConverters.toDecameter(unitFrom, value)],
        ['m', distanceConverters.toMeter(unitFrom, value)],
        ['dm', distanceConverters.toDecimeter(unitFrom, value)],
        ['cm', distanceConverters.toCentimeter(unitFrom, value)],
        ['mm', distanceConverters.toMillimeter(unitFrom, value)],
        ['um', distanceConverters.toMicrometer(unitFrom, value)],
        ['nm', distanceConverters.toNanometer(unitFrom, value)]
    ]);
    switch (unitType) {
        case 'd':
        case 'distance':
            if (distanceConverter.has(unitTo)) {
                output(unitFrom, value, unitTo, distanceConverter.get(unitTo));
            }
            else {
                messages.invalidUnitTo(unitTo, distanceUnits);
            }
            break;
        default:
            messages.invalidUnitType(unitType);
    }
};
if (input.length >= 3) {
    const command = input[2];
    switch (command) {
        case 'help':
        case '--help':
        case '-help':
            messages.help();
            break;
        case 'ls':
        case 'list':
            const argument = input[3];
            switch (argument) {
                case '-d':
                case '--distance':
                    console.log(distanceUnits.toString());
                    break;
                default:
                    console.log(`
Distance: ${distanceUnits.toString()}
                        `);
            }
            break;
        case 'conv':
        case 'convert':
            if (input.length <= 5) {
                messages.notEnoughArguments();
                break;
            }
            let unitType = input[3];
            let unitFrom = input[4].split('-')[0];
            let unitTo = input[4].split('-')[1];
            let value = parseFloat(input[5]);
            if (isNaN(value)) {
                console.log(`The value provided is not a number`);
                break;
            }
            converter(unitType, unitFrom, unitTo, value);
            break;
        default:
            messages.invalidCommand(command);
    }
}
else {
    messages.help();
}
