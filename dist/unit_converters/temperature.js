#!usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const messages = __importStar(require("../messages"));
const convert = (unitFrom, unitTo, value) => {
    const formulasFrom = {
        'C': value,
        'F': (value - 32) * 5 / 9,
        'K': value - 273.15,
        'R': value * 5 / 9 - 273.15,
        'Re': value * 1.25,
        'De': 100 - value * 2 / 3
    };
    if (!(unitFrom in formulasFrom)) {
        messages.invalidUnitFrom(unitFrom, Object.keys(formulasFrom), 'temperature');
        value = formulasFrom[unitFrom];
    }
    const formulasTo = {
        'C': value,
        'F': value * (9 / 5) + 32,
        'K': value + 273.15,
        'R': (value + 273.15) * 9 / 5,
        'Re': value * 0.8,
        'De': (100 - value) * 3 / 2
    };
    if (!(unitTo in formulasTo)) {
        messages.invalidUnitTo(unitTo, Object.keys(formulasTo), 'temperature');
    }
    else {
        return formulasTo[unitTo];
    }
};
exports.convert = convert;
