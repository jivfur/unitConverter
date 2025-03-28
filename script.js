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
        "Nautical Mile (nmi)"],
    "temperature": [
        "Celsius (°C)",
        "Fahrenheit (°F)",
        "Kelvin (K)"
    ],
    "weight": [
        "Milligram (mg)",
        "Gram (g)",
        "Kilogram (kg)",
        "Metric Tonne (t)",
        "Ounce (oz)",
        "Pound (lb)",
        "Stone (st)",
        "Ton (US ton)",
        "Ton (UK or Imperial ton)"],
    "volume": [
        "Milliliter (mL)",
        "Liter (L)",
        "Cubic centimeter (cm³)",
        "Cubic meter (m³)",
        "Fluid ounce (fl oz)",
        "Cup (c)",
        "Pint (pt)",
        "Quart (qt)",
        "Gallon (gal)",
        "Cubic inch (in³)",
        "Cubic foot (ft³)",
        "Cubic yard (yd³)",
    ]
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
    "temperature": {
        "Celsius (°C)": {
            "Fahrenheit (°F)": function (value) {
                return (value * 9 / 5) + 32
            }
        },
        "Fahrenheit (°F)": {
            "Kelvin (K)": function (value) {
                return (value - 32) * 5 / 9 + 273.15
            }
        },
        "Kelvin (K)": {
            "Celsius (°C)": function (value) {
                return value - 273.15
            }
        }
    },
    "weight": {
        "Milligram (mg)": {
            "Gram (g)": 0.001
        },
        "Gram (g)": {
            "Kilogram (kg)": 0.001,
        },
        "Kilogram (kg)": {
            "Metric Tonne (t)": 0.001,
        },
        "Metric Tonne (t)": {
            "Ounce (oz)": 35274,
        },
        "Ounce (oz)": {
            "Pound (lb)": 0.0625,
        },
        "Pound (lb)": {
            "Stone (st)": 0.0714286,
        },
        "Stone (st)": {
            "Ton (US ton)": 0.007,
        },
        "Ton (US ton)": {
            "Ton (UK or Imperial ton)": 0.892857,
        },
        "Ton (UK or Imperial ton)": {
            "Milligram (mg)": 1.016e+9
        },
    },
    "volume": {
        "Milliliter (mL)": {
            "Liter (L)": 0.001
        },
        "Liter (L)": {
            "Cubic centimeter (cm³)": 1000
        },
        "Cubic centimeter (cm³)": {
            "Cubic meter (m³)": 1e-6,
        },
        "Cubic meter (m³)": {
            "Fluid ounce (fl oz)": 33814,
        },
        "Fluid ounce (fl oz)": {
            "Cup (c)": 0.125,
        },
        "Cup (c)": {
            "Pint (pt)": 0.416337,
        },
        "Pint (pt)": {
            "Quart (qt)": 0.600475,
        },
        "Quart (qt)": {
            "Gallon (gal)": 0.25,
        },
        "Gallon (gal)": {
            "Cubic inch (in³)": 231,
        },
        "Cubic inch (in³)": {
            "Cubic foot (ft³)": 0.000578704
        },
        "Cubic foot (ft³)": {
            "Cubic yard (yd³)": 0.037037
        },
        "Cubic yard (yd³)": {
            "Milliliter (mL)": 764555
        },
    }

}

function convert(type, value, fromUnit, toUnit) {
    let route = routes[type]
    let pos = route.indexOf(fromUnit)
    let result = value
    let from = route[pos]
    do {
        pos += 1
        pos = pos % route.length
        let to = route[pos]
        if (typeof (units[type][from][to]) == "function") {
            result = units[type][from][to](result)
        } else {
            result *= units[type][from][to]
        }
        console.log(from, to, result)
        from = to
    } while (from != toUnit)
    return result
}

function fillUnitSelect(element, unit) {
    const units = routes[unit]
    element.innerHTML = ""
    units.forEach(unitName => {
        let option = document.createElement("option")
        option.setAttribute("value", unitName)
        option.textContent = unitName
        element.appendChild(option)
    });
}

const unitTypeEl = document.getElementById("unit-type")
const fromUnitEl = document.getElementById("from-unit")
const toUnitEl = document.getElementById("to-unit")
const convertbtn = document.getElementById("convert-button")
const fromValueEl = document.getElementById("from-value")
const conversionResultEl = document.getElementById("conversion-result")
const decimalPointEl = document.getElementById("decimal-points")
let res = 0
unitTypeEl.addEventListener("change", function () {
    fillUnitSelect(fromUnitEl, unitTypeEl.value)
    fillUnitSelect(toUnitEl, unitTypeEl.value)
})

convertbtn.addEventListener("click", function () {
    if (unitTypeEl.value.length > 0 && fromValueEl.value.length > 0 && fromUnitEl.value.length > 0 && toUnitEl.value.length > 0) {
        res = convert(unitTypeEl.value, Number(fromValueEl.value), fromUnitEl.value, toUnitEl.value)
        conversionResultEl.textContent = `${res.toFixed(decimalPointEl.value)} ${toUnitEl.value}`
    }

})

decimalPointEl.addEventListener("change", function () {
    if (conversionResultEl.textContent.length > 0) {
        conversionResultEl.textContent = `${res.toFixed(decimalPointEl.value)} ${toUnitEl.value}`
    }
})
