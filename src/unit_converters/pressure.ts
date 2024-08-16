#!user/bin/env node
import * as messages from '../messages'

interface Pressure {
    [unit: string]: number
}

const formulas : Pressure = {
    'atm': 101325,
    'Torr': 133.322368421,
    'psi': 6894.757293168,
    'bar': 100000,
    'dbar': 10000,
    'mbar': 100,
    'kPa': 1000,
    'hPa': 100,
    'Pa': 1,
    'Ba': 0.1
}

export const convert = (unitFrom : string, unitTo: string, value : number) : number | undefined => {
    if (!(unitFrom in formulas)) {
        messages.invalidUnitFrom(unitFrom, Object.keys(formulas), 'pressure')
    } else if (!(unitTo in formulas)) {
        messages.invalidUnitTo(unitTo, Object.keys(formulas), 'pressure')
    } else {
        return (value * formulas[unitFrom]) / formulas[unitTo]
    }
}