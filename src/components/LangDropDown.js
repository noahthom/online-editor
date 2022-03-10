import React, { useState } from "react";
import Select from "react-select";
import { setLang } from "../redux/actions";
import store from "../app";


const options = [
    {value: 'nodejs', label: 'Javascript'},
    {value: 'java', label: 'Java'},
    {value: 'python3', label: 'Python 3'},
    {value: 'cpp17', label: 'C++ 17'}
]

const LangDropDown = () => {

    const [selectedOption, setSelectedOption] = useState(options[0])

    return (
        <div>
            <Select value={selectedOption} onChange={(value) => {
                setSelectedOption(value)
                store.dispatch(setLang(value.value))
            }} options={options} />
        </div>
    )
}

export default LangDropDown