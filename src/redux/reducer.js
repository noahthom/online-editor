const reducerDefaultState = {
    output: '',
    lang: 'nodejs',
    ver: '4',
    theme: 'materialLight'
}

const reducer = (state = reducerDefaultState, action) => {
    switch(action.type){
        case 'SET_OUTPUT':
            return {
                ...state,
                output: action.output
            }
        case 'SET_LANG':
            return {
                ...state,
                lang: action.lang,
                ver: action.ver
            }
        case 'SET_THEME':
            return {
                ...state,
                theme: action.theme
            }
        default: 
            return state
    }
}

export default reducer