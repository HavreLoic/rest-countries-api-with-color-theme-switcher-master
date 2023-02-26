import React from 'react'
import { createContext } from 'react'

export const themes = {
    dark: "",
    light: "light-mode"
}

export const ThemeContext = createContext({
    theme: "",
    changeTheme: () => { }
})