export const setOutput = (output = '') => {
    return {
        type: 'SET_OUTPUT',
        output
    }
}

export const setLang = (lang = 'nodejs') => ({
    type: 'SET_LANG',
    lang
})

export const setTheme = (theme = 'materialLight') => ({
    type: 'SET_THEME',
    theme
})

