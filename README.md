# UnitLine
UnitLine is an easy to use CLI based conversion tool. This tool makes it extremely easy to convert from one unit to another.

## Supported units:
As of now, UnitLine supports conversion between the folowing units:
<details>
<summary>1. Distance Units</summary>

- Kilometer (km)
- Hectometer (hm)
- Decameter (dam)
- Meter (m)
- Decimeter (dm)
- Centimeter (cm)
- Millimeter (mm)
- Micrometer (μm/um)
- Nanometer (nm)
</details>

<details>
<summary>2. Mass Units</summary>

- Short Tonne (t)
- Kilogram (kg)
- Hectogram (hg)
- Decagram (dag)
- Gram (g)
- Carat (ct)
- Decigram (dg)
- Centigram (cg)
- Milligram (mg)
- Microgram (ug)
- Nanogram (ng)
</details>


Outside of these units there are plans to add support for units of temperature, time, area, volume, bit & bytes.

> [!NOTE]
> Due to JavaScript not being able to handle large numbers, conversions of large numbers might show up with "E notation" sometimes.

To list all supported units, run:
```
unitline ls
```

## Syntax:
The syntax for converting between units is simple. Just use the following format:
```
unitline conv <type of the units> <current unit>-<unit to> <value>
```
**Example:**
```
unitline conv distance m-km 1560.23
```
In this case the CLI will output the following statement:
```
1560.23m -> 1.56023km
```

To check out additional commands, you can run the following command:
```
unitline help
```
## Download
Currently there is no official way to download it.