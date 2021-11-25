import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react"
import classes from "./Style.module.css"


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void

}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        style,
        ...restProps
    }
) => {
    let mappedOptions: any[] = []; // map options with key
    if (options) {
        mappedOptions = options.map((o, index) => <option key={index}>{o}</option>)
    }

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChangeOption &&
        onChangeOption(e.target.value)

    }

    return (
        <select className={classes.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
