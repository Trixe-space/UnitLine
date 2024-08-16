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
            d, distance             For distance units
            m, mass                 For mass units
            temp, temperature       For temperature units
            t, time                 For time units
            p, pressure             For pressure units


    ls, list                Shows a list of all supported units
        Usage:
            unitline ls [--option]
            unitline ls -distance

        Options:
            -d, --distance              Shows a list of all distance units
            -m, --mass                  Shows a list of all mass units
            -temp, --temperature        Shows a list of all temperature units
            -t, --time                  Shows a list of all time units
            -p, --pressure              Shows a list of all pressure units
`
    console.error(message)
    process.exit(0)
}

export const invalidUnitTo = (unitTo : string, unitList : string[], type : string) : void => {
    const message : string= `
${unitTo} is not a valid unit to convert to.

List of valid ${type} units: ${unitList.toString()}

To check additional units, run:
    unitline ls
`
    console.error(message)
    process.exit(1)
}

export const invalidUnitFrom = (unitFrom : string, unitList : string[], type : string) : void => {
    const message : string = `
${unitFrom} is not a valid unit to convert from.

List of valid ${type} units: ${unitList.toString()}

To check additional units, run:
    unitline ls
    `
    console.error(message)
    process.exit(1)
}

export const invalidUnitType = (unitType : string) : void => {
    const message : string = `
${unitType} is not a valid type

List of available types:
    d, distance             Convert units of distance
    m, mass                 Convert units of mass
    temp, temperature       Convert units of temperature
    t, time                 Convert units of time
    p, pressure             Convert units of pressure
`
    console.error(message)
    process.exit(1)
}

export const notEnoughArguments = () : void => {
    const message : string = `
Not enough arguments.

Usage:
    unitline conv <type of units> <unit from>-<unit to> <value>
    unitline conv d m-km 1560.23

Unit Types:
    d, distance         Convert units of distance
    m, mass             Convert units of mass
    t, temperature      Convert units of temperature
    t, time             Convert units of time
    p, pressure         Convert units of pressure

To view supported units, run:
    unitline ls
`
    console.error(message)
    process.exit(1)
}

export const invalidCommand = (command : string) : void => {
    const message = `
${command} is not a valid UnitLine command.

To see a list of all valid commands, please run the following command:
    unitline help    
`
    console.error(message)
    process.exit(1)
}