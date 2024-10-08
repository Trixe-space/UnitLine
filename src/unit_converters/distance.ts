#!usr/bin/env node
import * as messages from "../messages";

interface Distance {
    [unit: string]: number;
}

const formulas : Distance = {
    'km': 1000,
    'hm': 100,
    'dam': 10,
    'm': 1,
    'dm': 0.1,
    'cm': 0.01,
    'mm': 0.001,
    'um': 0.000001,
    'nm': 0.000000001,
    'nmi': 1852,
    'mi': 1609.34,
    'yd': 0.9144,
    'ft': 0.3048,
    'in': 0.0254,
}

export const convert = (unitFrom : string, unitTo: string, value : number) : number | undefined => {
    if (!(unitFrom in formulas)) {
        messages.invalidUnitFrom(unitFrom, Object.keys(formulas), 'distance')
    } else if (!(unitTo in formulas)) {
        messages.invalidUnitTo(unitTo, Object.keys(formulas), 'distance')
    } else {
        return (value * formulas[unitFrom]) / formulas[unitTo]
    }
}