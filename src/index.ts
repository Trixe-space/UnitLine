#!/usr/bin/env node
import { error } from 'console';
import * as distanceConverters from './unit_converters/distance'

let input : string[] = process.argv

let unitType : string = input[2].slice(1)
let currentUnit : string = input[3].split('-')[0]
let convertedUnit : string = input[3].split('-')[1]
let value : number = parseFloat(input[4])

type distanceUnits = 'km' | 'hm' | 'dam' | 'm' | 'dm' | 'cm' | 'mm' | 'um' | 'nm'
let distanceConverter : Map<distanceUnits, number> = new Map([
    ['km', distanceConverters.toKilometer(currentUnit, value)],
    ['hm', distanceConverters.toHectometer(currentUnit, value)],
    ['dam', distanceConverters.toDecameter(currentUnit, value)],
    ['m', distanceConverters.toMeter(currentUnit, value)],
    ['dm', distanceConverters.toDecimeter(currentUnit, value)],
    ['cm', distanceConverters.toCentimeter(currentUnit, value)],
    ['mm', distanceConverters.toMillimeter(currentUnit, value)],
    ['um', distanceConverters.toMicrometer(currentUnit, value)],
    ['nm', distanceConverters.toNanometer(currentUnit, value)]

])

switch (unitType) {
    case 'distance':
    case 'd':
        if (distanceConverter.has(convertedUnit as distanceUnits)) {
            console.log(`${value + currentUnit} -> ${distanceConverter.get(convertedUnit as distanceUnits) + convertedUnit}`)
        } else {
            throw error(`${convertedUnit} is not a valid unit`)
        }
        break
    default:
        throw error(`${unitType} is not a valid type`)
}