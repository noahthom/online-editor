export const setOutput = (output = '') => {
    return {
        type: 'SET_OUTPUT',
        output
    }
}

export const setLang = (lang = 'nodejs', ver = '4') => ({
    type: 'SET_LANG',
    lang,
    ver
})

export const setTheme = (theme = 'materialLight') => ({
    type: 'SET_THEME',
    theme
})

