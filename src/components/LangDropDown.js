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

// const defaultCode = {
//     nodejs: 'console.log(\'Welcome to BitPad!\')',
//     python3: 'print(\'Welcome to BitPad!\')',
//     cpp17: '#include<iostream> \nusing namespace std; \nint main(){\n   cout<<\"Welcome to BitPad! \"; \n   return 0; \n}',
//     java: 'public class Main \n{ \n     public static void main(String[] args) { \n         System.out.println("Welcome to Online IDE!! Happy Coding :)"); \n     } \n}'

// }

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