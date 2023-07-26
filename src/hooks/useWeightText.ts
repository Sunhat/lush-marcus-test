import {ProductWeight} from "@/types/Products";
import {useMemo} from "react";

function convertToBase(weight: ProductWeight) {
    switch(weight.unit) {
        case "KG":
            return weight.value * 1000
        case "G":
            return weight.value
    }
}
function convertToUnit(weight: ProductWeight, toUnit: 'G' | 'KG'): ProductWeight {
    if (weight.unit === toUnit) {
        return {...weight}
    }
    const baseValue = convertToBase(weight)
    let newValue;
    switch (toUnit) {
        case "G":
            newValue = baseValue
            break;
        case "KG":
            newValue = baseValue / 1000
            break;
    }
    return {
        unit: toUnit,
        value: newValue
    }
}
const useWeightText = (weight: ProductWeight | null, toUnit: 'G' | 'KG') => {
    return useMemo(() => {
        if (!weight) {
            return ''
        }
        const convertedWeight = convertToUnit(weight, toUnit)
        return `${convertedWeight.value}${convertedWeight.unit}`
    }, [weight, toUnit])
}


 export default useWeightText
