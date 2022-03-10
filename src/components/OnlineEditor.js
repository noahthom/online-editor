import React from "react";
import EditorSpace from "./EditorSpace";
import LangDropDown from "./LangDropDown";
import OutputArea from "./OutputArea";

const OnlineEditor = () => {

    return (
        <div>
            <LangDropDown />
            <EditorSpace />
            <OutputArea />
        </div>
    )

}

export default OnlineEditor