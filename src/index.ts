#!/usr/bin/env node
import { error } from 'console';
import * as distanceConverters from './unit_converters/distance'

const input : string[] = process.argv

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
`

const distanceUnits : string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm', 'um', 'nm']

const output = (unitFrom: string, value : number, unitTo: string, convertedValue : number) => {
    console.log(`${value + unitFrom} -> ${convertedValue + unitTo}`)
}

//TODO Put all the messages in their own seperate file.
const converter = (unitType : string, unitFrom : string, unitTo : string, value : number) : void => {
    let convertedValue : number
    const distanceConverter : Map<string, number> = new Map([
        ['km', distanceConverters.toKilometer(unitFrom, value)],
        ['hm', distanceConverters.toHectometer(unitFrom, value)],
        ['dam', distanceConverters.toDecameter(unitFrom, value)],
        ['m', distanceConverters.toMeter(unitFrom, value)],
        ['dm', distanceConverters.toDecimeter(unitFrom, value)],
        ['cm', distanceConverters.toCentimeter(unitFrom, value)],
        ['mm', distanceConverters.toMillimeter(unitFrom, value)],
        ['um', distanceConverters.toMicrometer(unitFrom, value)],
        ['nm', distanceConverters.toNanometer(unitFrom, value)]
    ])
    switch (unitType) {
        case 'd':
        case 'distance':
            if (distanceConverter.has(unitTo)) {
                output(unitFrom, value, unitTo, distanceConverter.get(unitTo)!)
            } else {
                console.log(`
${unitTo} is not a valid unit to convert to.

List of valid units: ${distanceUnits.toString()}

To check additional units, run:
    unitline ls
                    `)
            }
            break
        default:
            console.log(`
${unitType} is not a valid type

List of available types:
d, distance       Convert units of distance
                `)
    }
    
}

if (input.length >= 3) {
    const command : string = input[2]
    switch (command) {
        case 'help':
        case '--help':
        case '-help':
            console.log(helpMessage)
            break
        case 'ls':
        case 'list':
            const argument = input[3]
            switch (argument) {
                case '-d':
                case '--distance':
                    console.log(distanceUnits.toString())
                    break
                default:
                    console.log(`
Distance: ${distanceUnits.toString()}
                        `)
            }
            break
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
                    `)
            break
            }
            let unitType : string = input[3]
            let unitFrom : string = input[4].split('-')[0]
            let unitTo : string = input[4].split('-')[1]
            let value : number = parseFloat(input[5])

            if (isNaN(value)) {
                console.log(`The value provided is not a number`)
                break
            }

            converter(unitType, unitFrom, unitTo, value)
            break
        default:
            console.log(`
${command} is not a valid UnitLine command.

To see a list of all valid commands, please run the following command:
    unitline help
                `)
    }
} else {
    console.log(helpMessage)
}