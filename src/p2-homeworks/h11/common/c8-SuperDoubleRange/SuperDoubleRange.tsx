import React from "react"
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number
    disable?: boolean
    changeMinRange: (num: number) => void
    changeMaxRange: (num: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max,
        changeMinRange,
        changeMaxRange, step,
        disable
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: Event, newValue: number | number[]) => {
        if(Array.isArray(newValue)){
            changeMinRange(newValue[0])
            changeMaxRange(newValue[1])
        }
    }

    return (
        <>
            <Box sx={{width: 300}}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={min && min}
                    max={max && max}
                    step={step ? step : 1}
                    disabled={disable ? disable : false}
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
