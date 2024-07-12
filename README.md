# UnitLine
UnitLine is an easy to use CLI based conversion tool. This tool makes it extremely easy to convert from one unit to another.

## Supported units:
As of now, UnitLine supports conversion between the folowing units:

**Distance:**
- Kilometer (km)
- Hectometer (hm)
- Decameter (dam)
- Meter (m)
- Decimeter (dm)
- Centimeter (cm)
- Millimeter (mm)
- Micrometer (μm/um)
- Nanometer (nm) [Note: Due to JavaScript not being able to handle large numbers, nanometers conversions might show up with "E notation" sometimes.]

Outside of these units there are plans to add support for units of distance in the imperial system, units of mass, temperature, time, area, volume, bit & bytes.

## Syntax:
The syntax for converting between units is simple. Just use the following format:
```
unitline -<type of the units> <current unit>-<unit you want to convert to> <value>
```
**Example:**
```
unitline -distance m-km 1560.23
```
In this case the CLI will output the following statement:
```
1560.23m -> 1.56023km
```
