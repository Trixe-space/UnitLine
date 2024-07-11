#!/usr/bin/env node

let input : string[] = process.argv

let unitType : string = input[2].slice(1)
let currentUnit : string = input[3].split('-')[0]
let convertedUnit : string = input[3].split('-')[1]
let value : number = parseFloat(input[4])

console.log(unitType, currentUnit, convertedUnit, value)