#!usr/bin/env node
import * as messages from '../messages'

interface Time {
    [unit: string]: number
}

const formulas : Time = {
    'c': 52560000,
    'dec': 5256000,
    'y': 525600,
    'mo': 43200,
    'w': 10080,
    'd': 1440,
    'h': 60,
    'm': 1,
    's': 0.0166666667,
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