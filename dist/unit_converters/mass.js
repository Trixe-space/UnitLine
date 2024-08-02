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
let formulas = {
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
};
const convert = (unitFrom, unitTo, value) => {
    if (!(unitFrom in formulas)) {
        messages.invalidUnitFrom(unitFrom, Object.keys(formulas), 'mass');
    }
    else {
        if (!(unitTo in formulas)) {
            messages.invalidUnitTo(unitTo, Object.keys(formulas), 'mass');
        }
        else {
            return (value * formulas[unitFrom]) / formulas[unitTo];
        }
    }
};
exports.convert = convert;
