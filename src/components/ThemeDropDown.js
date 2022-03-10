import React, { useState } from "react";
import Select from "react-select";
import { setTheme } from "../redux/actions";
import store from "../app";


const options = [
    {value: 'materialLight', label: "Material Light" },
    {value: 'materialDark', label: "Material Dark" },
    {value: 'solarizedLight', label: "Solarized Light" },
    {value: 'solarizedDark', label: "Solarized Dark" },
    {value: 'dracula', label: "Dracula" },
    {value: 'githubLight', label: "Github Light" },
    {value: 'githubDark', label: "Github Dark" },
    {value: 'aura', label: "Aura"}
]

const ThemeDropDown = () => {

    const [selectedOption, setSelectedOption] = useState(options[0])

    return (
        <div>
            <Select value={selectedOption} onChange={(value) => {
                setSelectedOption(value)
                store.dispatch(setTheme(value.value))
            }} options={options} />
        </div>
    )
}

export default ThemeDropDown