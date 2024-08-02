"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidCommand = exports.notEnoughArguments = exports.invalidUnitType = exports.invalidUnitFrom = exports.invalidUnitTo = exports.help = void 0;
const help = () => {
    const message = `
unitline <command>

Commands:
    help, -help, --help     Shows help message with a list of all commands
        Usage:
            unitline help


    conv, convert           Convert between two units
        Usage:
            unitline conv <type of units> <unit from>-<unit to> <value>
            unitline conv d m-km 1560.23

        Supported unit types
            d, distance       For distance units


    ls, list                Shows a list of all supported units
        Usage:
            unitline ls [--option]
            unitline ls -distance

        Options:
            -d, --distance       Shows a list of all distance units
`;
    console.log(message);
};
exports.help = help;
const invalidUnitTo = (unitTo, unitList, type) => {
    const message = `
${unitTo} is not a valid unit to convert to.

List of valid ${type} units: ${unitList.toString()}

To check additional units, run:
    unitline ls
`;
    console.log(message);
};
exports.invalidUnitTo = invalidUnitTo;
const invalidUnitFrom = (unitFrom, unitList, type) => {
    const message = `
${unitFrom} is not a valid unit to convert from.

List of valid ${type} units: ${unitList.toString()}

To check additional units, run:
    unitline ls
    `;
    console.log(message);
};
exports.invalidUnitFrom = invalidUnitFrom;
const invalidUnitType = (unitType) => {
    const message = `
${unitType} is not a valid type

List of available types:
    d, distance       Convert units of distance
`;
    console.log(message);
};
exports.invalidUnitType = invalidUnitType;
const notEnoughArguments = () => {
    const message = `
Not enough arguments.

Usage:
    unitline conv <type of units> <unit from>-<unit to> <value>
    unitline conv d m-km 1560.23

Unit Types:
    d, distance       Convert units of distance

To view supported units, run:
    unitline ls
`;
    console.log(message);
};
exports.notEnoughArguments = notEnoughArguments;
const invalidCommand = (command) => {
    const message = `
${command} is not a valid UnitLine command.

To see a list of all valid commands, please run the following command:
    unitline help    
`;
    console.log(message);
};
exports.invalidCommand = invalidCommand;
