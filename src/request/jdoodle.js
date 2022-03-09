import axios from "axios"
import store from "../app"
import { setOutput } from "../redux/actions"


const url = 'https://noahs-cors-proxy.herokuapp.com/https://api.jdoodle.com/v1/execute'

const sendCode = (code, lang, versionIndex) => {
    const data = {
        script: code,
        language: lang,
        versionIndex,
        clientId: '219371fc2049e94f7eea98354f4829f9',
        clientSecret: '81c29c9d412c7c87803dbca03d9c3d0ed75cb5669c3e6c4773acd5204310f517'
    }

    store.dispatch(setOutput('Compiling....'))
    axios.post(url, data).then((response) => {
        store.dispatch(setOutput(response.data.output))
    }).catch((error) => {
        store.dispatch(setOutput(error.data.error))
    })

}

export default sendCode
