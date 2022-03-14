import React from "react";
import EditorSpace from "./EditorSpace";
import LangDropDown from "./LangDropDown";
import OutputArea from "./OutputArea";
import ThemeDropDown from "./ThemeDropDown";

const OnlineEditor = () => {

    return (
        <div>
            <h1 className="display-1 text-center">
                BitPad
                <small className="text-muted"> a coding editor</small>
            </h1>


            <div className="container">
                <div>
                    <div>
                        <LangDropDown />
                    </div>
                    <div>
                        <ThemeDropDown />
                    </div>
                </div>
            </div>
            
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <EditorSpace />
                    </div>
                    <div className="col">
                        <OutputArea />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default OnlineEditor