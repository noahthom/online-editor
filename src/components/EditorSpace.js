import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import sendCode from '../util/jdoodle'
import { connect } from 'react-redux'
import { javascript } from '@codemirror/lang-javascript'
import { cpp } from '@codemirror/lang-cpp'
import { java } from '@codemirror/lang-java'
import { python } from '@codemirror/lang-python'


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


const EditorSpace = (props) => {
    
    const [code, setCode] = useState('')

    return (
        <div>
            <CodeMirror height="200px" value={code} onChange={(value) => setCode(value)} extensions={langSupport(props.lang)}/>
            <button onClick={() => sendCode(code, props.lang)}>Compile</button>
        </div>
    )

}


const mapStatetoProps = (state) => {
    return {
        lang: state.lang
    }
}

export default connect(mapStatetoProps)(EditorSpace)