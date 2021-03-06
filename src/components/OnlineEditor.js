import React from "react";
import EditorSpace from "./EditorSpace";
import LangDropDown from "./LangDropDown";
import OutputArea from "./OutputArea";
import ThemeDropDown from "./ThemeDropDown";

const OnlineEditor = () => {

    return (
        <div>
            <div className="container">
                <h1 className="mt-0 mb-sm-5 header display-1 text-left p-lg-4 fw-bolder">
                    BitPad
                    <small className="text-muted fw-lighter"> a coding editor</small>
                </h1>
            </div>


            <div className="container mb-sm-5">
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

            <footer className="footer m-5">
                <div className="container">
                    <span className="text-muted">
                        Created by Noah. Contact me at: <a href="mailto:noahrozario@outlook.com">noahrozario@outlook.com</a>
                    </span>
                    <div>
                        <a href="https://github.com/noahthom/online-editor" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                    
                </div>
            </footer>
        </div>
    )

}

export default OnlineEditor