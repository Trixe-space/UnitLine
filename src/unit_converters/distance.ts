#!usr/bin/env node
import * as messages from "../messages";

interface Distance {
    [unit: string]: number;
}

let formulas : Distance = {
    'km': 1000,
    'hm': 100,
    'dam': 10,
    'm': 1,
    'dm': 0.1,
    'cm': 0.01,
    'mm': 0.001,
    'um': 0.000001,
    'nm': 0.000000001
}

export const convert = (unitFrom : string, unitTo: string, value : number) => {
    if (!(unitFrom in formulas)) {
        messages.invalidUnitFrom(unitFrom, Object.keys(formulas), 'distance')
    } else {
        if (!(unitTo in formulas)) {
            messages.invalidUnitTo(unitTo, Object.keys(formulas), 'distance')
        } else {
            return (value * formulas[unitFrom]) / formulas[unitTo]
        }
    }
}