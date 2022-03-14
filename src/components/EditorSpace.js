import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import sendCode from '../util/jdoodle'
import { connect } from 'react-redux'
import { javascript } from '@codemirror/lang-javascript'
import { cpp } from '@codemirror/lang-cpp'
import { java } from '@codemirror/lang-java'
import { python } from '@codemirror/lang-python'
import {materialLight} from '@ddietr/codemirror-themes/theme/material-light'
import {materialDark} from '@ddietr/codemirror-themes/theme/material-dark'
import {solarizedLight} from '@ddietr/codemirror-themes/theme/solarized-light'
import {solarizedDark} from '@ddietr/codemirror-themes/theme/solarized-dark'
import {dracula} from '@ddietr/codemirror-themes/theme/dracula'
import {githubLight} from '@ddietr/codemirror-themes/theme/github-light'
import {githubDark} from '@ddietr/codemirror-themes/theme/github-dark'
import {aura} from '@ddietr/codemirror-themes/theme/aura'


const langSupport = (lang) => {
    switch(lang){
        case 'nodejs':{
            return javascript()
        }case 'java':{
            return java()
        }case 'cpp17':{
            return cpp()
        }case 'python3':{
            return python()
        }
    }
}

const themeSupport = (theme) => {
    switch(theme){
        case 'materialLight':
            return materialLight
        case 'materialDark':
            return materialDark
        case 'solarizedLight':
            return solarizedLight
        case 'solarizedDark':
            return solarizedDark
        case 'dracula':
            return dracula
        case 'githubLight':
            return githubLight
        case 'githubDark':
            return githubDark
        case 'Aura':
            return aura
    }
}




const EditorSpace = (props) => {
    
    const [code, setCode] = useState('// Welcome to BitPad!')

    return (
        <div>
            <CodeMirror height="600px" value={code} onChange={(value) => setCode(value)} extensions={langSupport(props.lang)} theme={themeSupport(props.theme)}/>
            <button className="btn btn-outline-primary btn-lg compile-button" onClick={() => sendCode(code, props.lang)}><i class="fa-solid fa-person-running running-icon"></i>Run</button>
        </div>
    )

}


const mapStatetoProps = (state) => {
    return {
        lang: state.lang,
        theme: state.theme,
    }
}

export default connect(mapStatetoProps)(EditorSpace)