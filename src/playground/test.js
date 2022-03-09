const { default: axios } = require('axios')

const url = 'https://api.jdoodle.com/v1/execute'

const sendCode = () => {
    const data = {
        script: 'adjkascjkasdcjnkac',
        language: 'nodejs',
        versionIndex: '4',
        clientId: '219371fc2049e94f7eea98354f4829f9',
        clientSecret: '81c29c9d412c7c87803dbca03d9c3d0ed75cb5669c3e6c4773acd5204310f517'
    }

    axios.post(url, data).then((response) => console.log(response)).catch((error) => console.log(error))

}

sendCode()

