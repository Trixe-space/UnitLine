#!usr/bin/env node
import { error } from "console";

export const toMeter = (currentUnit : string, value : number) : number => {
    type distanceUnits = 'km' | 'hm' | 'dam' | 'm' | 'dm' | 'cm' | 'mm' | 'um' | 'nm'
    const toMeterFormulas : Map<distanceUnits, number> = new Map([
        ['km', value * 1000],
        ['hm', value * 100],
        ['dam', value * 10],
        ['m', value],
        ['dm', value / 10],
        ['cm', value / 100],
        ['mm', value / 1000],
        ['um', value / 1000000],
        ['nm', value / 1000000000]
    ])

    if (!toMeterFormulas.has(currentUnit as distanceUnits)) {
        throw error(`${currentUnit} is not a valid unit`)
    }
    return toMeterFormulas.get(currentUnit as distanceUnits)!
}

export const toKilometer = (currentUnit : string, value : number) => {
    let newValue = toMeter(currentUnit, value)
    return newValue / 1000
}

export const toHectometer = (currentUnit : string, value : number) => {
    let newValue = toMeter(currentUnit, value)
    return newValue / 100
}

export const toDecameter = (currentUnit : string, value : number) => {
    let newValue = toMeter(currentUnit, value)
    return newValue / 10
}

export const toDecimeter = (currentUnit : string, value : number) => {
    let newValue = toMeter(currentUnit, value)
    return newValue * 10
}

export const toCentimeter = (currentUnit : string, value : number) => {
    let newValue = toMeter(currentUnit, value)
    return newValue * 100
}

export const toMillimeter = (currentUnit : string, value : number) => {
    let newValue = toMeter(currentUnit, value)
    return newValue * 1000
}

export const toMicrometer = (currentUnit : string, value : number) => {
    let newValue = toMeter(currentUnit, value)
    return newValue * 1000000
}

export const toNanometer = (currentUnit : string, value : number) => {
    let newValue = toMeter(currentUnit, value)
    return newValue / 1000000000
}