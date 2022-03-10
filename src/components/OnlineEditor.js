import React from "react";
import EditorSpace from "./EditorSpace";
import LangDropDown from "./LangDropDown";
import OutputArea from "./OutputArea";
import ThemeDropDown from "./ThemeDropDown";

const OnlineEditor = () => {

    return (
        <div>
            <LangDropDown />
            <ThemeDropDown />
            <EditorSpace />
            <OutputArea />
        </div>
    )

}

export default OnlineEditor