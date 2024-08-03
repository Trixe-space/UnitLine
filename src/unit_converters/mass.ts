#!usr/bin/env node
import * as messages from '../messages'

interface Mass {
    [unit: string]: number;
}

const formulas : Mass = {
    't': 1000000,
    'kg': 1000,
    'hg': 100,
    'dag': 10,
    'g': 1,
    'ct': 0.2,
    'dg': 0.1,
    'cg': 0.01,
    'mg': 0.001,
    'ug': 0.000001,
    'ng': 0.000000001
}

export const convert = (unitFrom : string, unitTo: string, value : number) : number | undefined => {
    if (!(unitFrom in formulas)) {
        messages.invalidUnitFrom(unitFrom, Object.keys(formulas), 'mass')
    } else if (!(unitTo in formulas)) {
        messages.invalidUnitTo(unitTo, Object.keys(formulas), 'mass')
    } else {
        return (value * formulas[unitFrom]) / formulas[unitTo]
    }
}