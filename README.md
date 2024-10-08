# UnitLine
UnitLine is an easy to use CLI based conversion tool. This tool makes it extremely easy to convert from one unit to another inside your terminal.

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
- Nautical Mile (nmi)
- Mile (mi)
- Yard (yd)
- Foot (ft)
- Inch (in)
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

<details>
<summary>3. Temperature Units</summary>

- Celcius (C)
- Farenheit (F)
- Kelvin (K)
- Rankine (R)
- Réaumur (Re)
- Delisle (De)
</details>

<details>
<summary>4. Time units</summary>

- Millennium (mi)
- Century (c)
- Decade (dec)
- Year (y)
- Month (mo)
- Week (w)
- Day (d)
- Hour (h)
- Minute (m)
- Second (s)
- Millisecond (ms)
- Microsecond (us)
- Nanosecond (ns)

> [!NOTE]
> 1. The length of a month has been standardized to be equal to 30 days.
> 2. The length of a year has been standardized to be equal to 365 days.
</details>

<details>
<summary>5. Pressure units</summary>

- Standard Atmosphere (atm)
- Torr (Torr)
- Pounds per Square Inch (psi)
- Bar (bar)
- Decibar (dbar)
- Millibar (mbar)
- Kilopascal (kPa)
- Hectopascal (hPa)
- Pascal (Pa)
- Barye (Ba)
</details>

Outside of these units there are plans to add conversions for color.

> [!NOTE]
> Due to JavaScript not being able to handle large numbers, conversions of large numbers sometimes might show up with "E notation".

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