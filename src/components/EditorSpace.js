import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import sendCode from '../util/jdoodle'

const EditorSpace = (props) => {
    
    const [code, setCode] = useState('')

    return (
        <div>
            <CodeMirror height="200px" value={code} onChange={(value) => setCode(value)}/>
            <button onClick={() => sendCode(code, 'nodejs', '4')}>Compile</button>
        </div>
    )

}

export default EditorSpace