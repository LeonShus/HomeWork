import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    let mappedOptions: any[] = []; // map options with key
    if (options) {
        mappedOptions = options.map((o, index) => <option key={index}>{o}</option>)
    }

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        let val = e.currentTarget.value

        onChangeOption &&
        onChangeOption(val)

    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
