import { ThemeProvider } from "styled-components"


export const ThemeStyledProvider = ({ children , theme }:any) => {
    return (
        <ThemeProvider theme={theme} >
        { children }
        </ThemeProvider>
    )
}