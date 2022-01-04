import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react"
import {Radio} from "@mui/material";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    radioColor?: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChangeOption &&
        onChangeOption(e.currentTarget.value)
    }

    const radioColor = restProps.radioColor ? restProps.radioColor : 'black'
// map options with key
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + "-" + i}>
            <Radio
                sx={{
                    color: radioColor,
                    "&.Mui-checked": {
                        color: radioColor,
                    },
                }}
                // name, checked, value, onChange
                name={o}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
