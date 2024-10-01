import React, { createContext, useContext } from 'react'


// Method that are gonna use in the themebtn function or components
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});


export const ThemeProvider = ThemeContext.Provider;


export default function useTheme(){
    return useContext(ThemeContext)
}

// All three steps of creating a context ,contextProvider and the function which gives the
// Methods are incorporated in one file
