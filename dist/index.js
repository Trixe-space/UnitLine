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
const distanceConverter = __importStar(require("./unit_converters/distance"));
const massConverter = __importStar(require("./unit_converters/mass"));
const temperatureConverter = __importStar(require("./unit_converters/temperature"));
const timeConverter = __importStar(require("./unit_converters/time"));
const pressureConverter = __importStar(require("./unit_converters/pressure"));
const messages = __importStar(require("./messages"));
const input = process.argv;
const distanceUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm', 'um', 'nm', 'nmi', 'mi', 'yd', 'ft', 'in'];
const massUnits = ['t', 'kg', 'hg', 'dag', 'g', 'ct', 'dg', 'cg', 'mg', 'ug', 'ng'];
const temperatureUnits = ['C', 'F', 'K', 'R', 'Re', 'De'];
const timeUnits = ['mi', 'c', 'dec', 'y', 'mo', 'w', 'd', 'h', 'm', 's', 'ms', 'us', 'ns'];
const pressureUnits = ['atm', 'Torr', 'psi', 'bar', 'dbar', 'mbar', 'kPa', 'hPa', 'Pa', 'Ba'];
const output = (unitFrom, value, unitTo, convertedValue) => {
    console.log(`${value} ${unitFrom} -> ${convertedValue} ${unitTo}`);
};
const converter = (unitType, unitFrom, unitTo, value) => {
    let convertedValue;
    switch (unitType) {
        case 'd':
        case 'distance':
            convertedValue = distanceConverter.convert(unitFrom, unitTo, value);
            if (convertedValue != undefined) {
                output(unitFrom, value, unitTo, convertedValue);
            }
            break;
        case 'm':
        case 'mass':
            convertedValue = massConverter.convert(unitFrom, unitTo, value);
            if (convertedValue != undefined) {
                output(unitFrom, value, unitTo, convertedValue);
            }
            break;
        case 'temp':
        case 'temperature':
            convertedValue = temperatureConverter.convert(unitFrom, unitTo, value);
            if (convertedValue != undefined) {
                output(unitFrom, value, unitTo, convertedValue);
            }
            break;
        case 't':
        case 'time':
            convertedValue = timeConverter.convert(unitFrom, unitTo, value);
            if (convertedValue != undefined) {
                output(unitFrom, value, unitTo, convertedValue);
            }
            break;
        case 'pressure':
        case 'p':
            convertedValue = pressureConverter.convert(unitFrom, unitTo, value);
            if (convertedValue != undefined) {
                output(unitFrom, value, unitTo, convertedValue);
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
                case '-m':
                case '--m':
                    console.log(massUnits.toString());
                    break;
                case '-temp':
                case '--temperature':
                    console.log(temperatureUnits.toString());
                    break;
                case '-t':
                case '--time':
                    console.log(timeUnits.toString());
                    break;
                case '-p':
                case '--pressure':
                    console.log(pressureUnits.toString());
                    break;
                default:
                    console.log(`
Distance: ${distanceUnits.toString()}
Mass: ${massUnits.toString()}
Temperature: ${temperatureUnits.toString()}
Time: ${timeUnits.toString()}
Pressure: ${pressureUnits.toString()}
                        `);
            }
            break;
        case 'conv':
        case 'convert':
            if (input.length <= 5) {
                messages.notEnoughArguments();
            }
            let unitType = input[3];
            let unitFrom = input[4].split('-')[0];
            let unitTo = input[4].split('-')[1];
            let value = parseFloat(input[5]);
            if (isNaN(value)) {
                console.error(`The value provided is not a number`);
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
