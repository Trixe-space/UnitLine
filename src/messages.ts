export const help = () : void => {
    const message : string= `
unitline <command>

Commands:
    help, -help, --help     Shows help message with a list of all commands
        Usage:
            unitline help


    conv, convert           Convert between two units
        Usage:
            unitline conv <type of units> <unit from>-<unit to> <value>
            unitline conv d m-km 1560.23

        Supported unit types
            d, distance       For distance units


    ls, list                Shows a list of all supported units
        Usage:
            unitline ls [--option]
            unitline ls -distance

        Options:
            -d, --distance       Shows a list of all distance units
`
    console.log(message)
}

export const invalidUnitTo = (unitTo : string, unitList : string[]) : void => {
    const message : string= `
${unitTo} is not a valid unit to convert to.

List of valid units: ${unitList.toString()}

To check additional units, run:
    unitline ls
`
    console.log(message)
}

export const invalidUnitType = (unitType : string) : void => {
    const message : string = `
${unitType} is not a valid type

List of available types:
    d, distance       Convert units of distance
`
    console.log(message)
}

export const notEnoughArguments = () : void => {
    const message : string = `
Not enough arguments.

Usage:
    unitline conv <type of units> <unit from>-<unit to> <value>
    unitline conv d m-km 1560.23

Unit Types:
    d, distance       Convert units of distance

To view supported units, run:
    unitline ls
`
    console.log(message)
}

export const invalidCommand = (command : string) : void => {
    const message = `
${command} is not a valid UnitLine command.

To see a list of all valid commands, please run the following command:
    unitline help    
`
    console.log(message)
}