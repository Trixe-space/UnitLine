#!usr/bin/env node

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

//TODO better error messages
export const convert = (unitFrom : string, unitTo: string, value : number) => {
    if (!(unitFrom in formulas)) {
        console.log('Invalid unit to convert from')
    } else {
        if (!(unitTo in formulas)) {
            console.log('Invalid unit to convert to')
        } else {
            return (value * formulas[unitFrom]) / formulas[unitTo]
        }
    }
}