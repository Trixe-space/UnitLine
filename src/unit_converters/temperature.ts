#!usr/bin/env node
import * as messages from "../messages";

interface Temperature {
    [unit: string]: number
}

export const convert = (unitFrom : string, unitTo: string, value : number) : number | undefined => {
    const formulasFrom : Temperature = {
        'C': value,
        'F': (value - 32) *  5 / 9,
        'K': value - 273.15,
        'R': value * 5 / 9 - 273.15,
        'Re': value * 1.25,
        'De': 100 - value * 2 / 3
    }

    if (!(unitFrom in formulasFrom)) {
        messages.invalidUnitFrom(unitFrom, Object.keys(formulasFrom), 'temperature')
        value = formulasFrom[unitFrom]
    }
    
    const formulasTo : Temperature = {
        'C': value,
        'F': value * (9/5) + 32,
        'K': value + 273.15,
        'R': (value + 273.15) * 9 / 5,
        'Re': value * 0.8,
        'De': (100 - value) * 3 / 2
    }

    if (!(unitTo in formulasTo)) {
        messages.invalidUnitTo(unitTo, Object.keys(formulasTo), 'temperature')
    } else {
        return formulasTo[unitTo]
    }
}