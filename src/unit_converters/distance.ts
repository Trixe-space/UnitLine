#!usr/bin/env node
export const toMeter = (currentUnit : string, value : number) : number => {
    switch(currentUnit) {
        case 'km':
            return value * 1000
        case 'hm':
            return value * 100
        case 'dam':
            return value * 10
        case 'dm':
            return value / 10
        case 'cm':
            return value / 100
        case 'mm':
            return value / 100
        case 'um':
            return value / 1000000
        case 'nm':
            return value / 1000000000
        default:
            return value
    }
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