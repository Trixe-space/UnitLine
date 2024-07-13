#!/usr/bin/env node
import * as distanceConverters from './unit_converters/distance'
import * as messages from './messages'

const input : string[] = process.argv

const distanceUnits : string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm', 'um', 'nm']

const output = (unitFrom: string, value : number, unitTo: string, convertedValue : number) => {
    console.log(`${value + unitFrom} -> ${convertedValue + unitTo}`)
}

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
                messages.invalidUnitTo(unitTo, distanceUnits)
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
                default:
                    console.log(`
Distance: ${distanceUnits.toString()}
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