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
const input = process.argv;
const helpMessage = `
unitline <command>

Commands:
    help, -help, --help     Shows help message with a list of all commands
        Usage:
            unitline help


    conv, convert           Convert between two units
        Usage:
            unitline conv <type of units> <unit from>-<unit to> <value>
            unitline d m-km 1560.23

        Supported unit types
            d, distance       For distance units


    ls, list                Shows a list of all supported units
        Usage:
            unitline ls [--option]
            unitline ls -distance

        Options:
            -d, --distance       Shows a list of all distance units
`;
const distanceUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm', 'um', 'nm'];
const output = (unitFrom, value, unitTo, convertedValue) => {
    console.log(`${value + unitFrom} -> ${convertedValue + unitTo}`);
};
//TODO Put all the messages in their own seperate file.
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
                console.log(`
${unitTo} is not a valid unit to convert to.

List of valid units: ${distanceUnits.toString()}

To check additional units, run:
    unitline ls
                    `);
            }
            break;
        default:
            console.log(`
${unitType} is not a valid type

List of available types:
d, distance       Convert units of distance
                `);
    }
};
if (input.length >= 3) {
    const command = input[2];
    switch (command) {
        case 'help':
        case '--help':
        case '-help':
            console.log(helpMessage);
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
                console.log(`
Not enough arguments.

Usage:
unitline conv <type of units> <unit from>-<unit to> <value>

Unit Types:
d, distance       Convert units of distance

To view supported units, run:
    unitline ls
                    `);
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
            console.log(`
${command} is not a valid UnitLine command.

To see a list of all valid commands, please run the following command:
    unitline help
                `);
    }
}
else {
    console.log(helpMessage);
}
