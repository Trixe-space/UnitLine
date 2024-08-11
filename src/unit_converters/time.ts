#!usr/bin/env node
import * as messages from '../messages'

interface Time {
    [unit: string]: number
}

const formulas : Time = {
    'c': 3153600000,
    'dec': 315360000,
    'y': 31536000,
    'mo': 2592000,
    'w': 604800,
    'd': 86400,
    'h': 3600,
    'm': 60,
    's': 1,
    'ms': 0.001,
    'us': 0.000001,
    'ns': 0.000000001
}

export const convert = (unitFrom : string, unitTo: string, value : number) : number | undefined => {
    if (!(unitFrom in formulas)) {
        messages.invalidUnitFrom(unitFrom, Object.keys(formulas), 'time')
    } else if (!(unitTo in formulas)) {
        messages.invalidUnitTo(unitTo, Object.keys(formulas), 'time')
    } else {
        return (value * formulas[unitFrom]) / formulas[unitTo]
    }
}