const reducerDefaultState = {
    output: '',
    lang: 'nodejs',
    theme: 'materialDark',
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
                lang: action.lang
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

