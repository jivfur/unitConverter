const routes = {
    "length": ["Nanometer (nm)",
        "Micrometer (µm)",
        "Millimeter (mm)",
        "Centimeter (cm)",
        "Meter (m)",
        "Kilometer (km)",
        "Inch (in)",
        "Foot (ft)",
        "Yard (yd)",
        "Mile (mi)",
        "Nautical Mile (nmi)"]
}
let units = {
    "length": {
        "Nanometer (nm)": {
            "Nautical Mile (nmi)": 5.39957e-13,
            "Nanometer (nm)": 1,
            "Micrometer (µm)": 0.001,

        },
        "Micrometer (µm)": {
            "Micrometer (µm)": 1,
            "Millimeter (mm)": 0.001,
        },

        "Millimeter (mm)": {
            "Millimeter (mm)": 1,
            "Centimeter (cm)": 0.1,
        },
        "Centimeter (cm)": {
            "Centimeter (cm)": 1,
            "Meter (m)": 0.01,
        },
        "Meter (m)": {
            "Meter (m)": 0.01,
            "Kilometer (km)": 0.001,
        },
        "Kilometer (km)": {
            "Kilometer (km)": 1,
            "Inch (in)": 39370.1,
        },
        "Inch (in)": {
            "Inch (in)": 1,
            "Foot (ft)": 0.0833333,
        },
        "Foot (ft)": {
            "Foot (ft)": 1,
            "Yard (yd)": 0.333333,
        },
        "Yard (yd)": {
            "Yard (yd)": 1,
            "Mile (mi)": 0.0005682,

        },
        "Mile (mi)": {
            "Mile (mi)": 1,
            "Nautical Mile (nmi)": 0.868976,
        },

        "Nautical Mile (nmi)": {
            "Nautical Mile (nmi)": 1,
            "Nanometer (nm)": 1.852e+12
        },
    },
    // "temperature": {
    //     "Celsius (°C)",
    //     "Fahrenheit (°F)",
    //     "Kelvin (K)"
    // },
    // "weight": {
    //     "Milligram (mg)",
    //     "Gram (g)",
    //     "Kilogram (kg)",
    //     "Metric Tonne (t)",
    //     "Ounce (oz)" ,
    //     "Pound (lb)",
    //     "Stone (st)",
    //     "Ton (US ton)",
    //     "Ton (UK or Imperial ton)",
    // },
    // "volume": {
    //     "Milliliter (mL)",
    //     "Liter (L)",
    //     "Cubic centimeter (cm³)",
    //     "Cubic meter (m³)",
    //     "Fluid ounce (fl oz)",
    //     "Cup (c)",
    //     "Pint (pt)",
    //     "Quart (qt)",
    //     "Gallon (gal)",
    //     "Cubic inch (in³)",
    //     "Cubic foot (ft³)",
    //     "Cubic yard (yd³)",
    //     "Fluid ounce (fl oz)",
    //     "Pint (pt)",
    //     "Quart (qt)",
    //     "Gallon (gal)",
    // }

}

function convertMultiply(type, value, fromUnit, toUnit) {
    let route = routes[type]
    let pos = route.indexOf(fromUnit)
    let result = value
    let from = route[pos]
    do {
        pos += 1
        pos = pos % route.length
        let to = route[pos]
        result *= units[type][from][to]
        console.log(from, to, result)
        from = to
    } while (from != toUnit)
    return result
}
