import * as React from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#f8f8f8',
    color: '#ffffff',
  },
  dark: {
    foreground: '#ffffff',
    background: '#202d36',
    color: '#000000',
  },
}

export const ThemeContext = React.createContext({
  theme: undefined,
  setTheme: async(theme) => null
})

export const useTheme = () => React.useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(themes.light)

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}