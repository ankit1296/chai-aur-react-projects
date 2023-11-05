import React, { useContext } from "react"

const Theme = React.createContext({
    themeMode: "dark",
    lightMode: () => {},
    darkMode: () => {},
})
export const ThemeContext = Theme.Provider;

export default function useTheme() {
    return useContext(Theme)
}