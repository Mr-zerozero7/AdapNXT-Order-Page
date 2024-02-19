//   importing context packages
import { createContext, useState , useContext, useEffect} from "react";

const ThemeContext = createContext()

export const useTheme =() => useContext(ThemeContext)


// creating Theme element and Exports
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('lightmode')

    // render 
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
      if(storedTheme){
        setTheme(storedTheme)
      }
    }, [])
    
    //  creating Theme Toggle
    const toggleTheme = () => {
        const newTheme = theme === 'lightmode' ? 'darkmode' : 'lightmode'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    // exporting values
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}