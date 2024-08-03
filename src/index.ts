#!/usr/bin/env node
import * as distanceConverter from './unit_converters/distance'
import * as massConverter from './unit_converters/mass'
import * as temperatureConverter from './unit_converters/temperature';
import * as messages from './messages'

const input : string[] = process.argv

const distanceUnits : string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm', 'um', 'nm']
const massUnits : string[] = ['t', 'kg', 'hg', 'dag', 'g', 'ct', 'dg', 'cg', 'mg', 'ug', 'ng']
const temperatureUnits : string[] = ['C', 'F', 'K']

const output = (unitFrom: string, value : number, unitTo: string, convertedValue : number) => {
    console.log(`${value + unitFrom} -> ${convertedValue + unitTo}`)
}

const converter = (unitType : string, unitFrom : string, unitTo : string, value : number) : void => {
    let convertedValue : number
    switch (unitType) {
        case 'd':
        case 'distance':
            convertedValue = distanceConverter.convert(unitFrom, unitTo, value) as number
            if (convertedValue != undefined) {
                output(unitFrom, value, unitTo, convertedValue)
            }
            break
        case 'm':
        case 'mass':
            convertedValue = massConverter.convert(unitFrom, unitTo, value) as number
            if (convertedValue != undefined) {
                output(unitFrom, value, unitTo, convertedValue)
            }
            break
        case 't':
        case 'temperature':
            convertedValue = temperatureConverter.convert(unitFrom, unitTo, value) as number
            if (convertedValue != undefined) {
                output(unitFrom, value, unitTo, convertedValue)
            }
            break
        default:
            messages.invalidUnitType(unitType)
    }
    
}

if (input.length >= 3) {
    const command : string = input[2]
    switch (command) {
        case 'help':
        case '--help':
        case '-help':
            messages.help()
            break
        case 'ls':
        case 'list':
            const argument = input[3]
            switch (argument) {
                case '-d':
                case '--distance':
                    console.log(distanceUnits.toString())
                    break
                case '-m':
                case '--m':
                    console.log(massUnits.toString())
                    break
                case '-t':
                case '--teamperature':
                    console.log(temperatureUnits.toString())
                    break
                default:
                    console.log(`
Distance: ${distanceUnits.toString()}
Mass: ${massUnits.toString()}
Temperature: ${temperatureUnits.toString()}
                        `)
            }
            break
        case 'conv':
        case 'convert':
            if (input.length <= 5) {
                messages.notEnoughArguments()
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
            messages.invalidCommand(command)
    }
} else {
    messages.help()
}