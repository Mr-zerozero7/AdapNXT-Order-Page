import { createContext, useState , useContext, useEffect} from "react";

const ThemeContext = createContext()

export const useTheme =() => useContext(ThemeContext)



export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('lightmode')

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
      if(storedTheme){
        setTheme(storedTheme)
      }
    }, [])
    
    const toggleTheme = () => {
        const newTheme = theme === 'lightmode' ? 'darkmode' : 'lightmode'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}