import React,{useContext} from "react";
import ThemeContext from "../ThemeContext";

const themeTogglerStyle = {
    cursor: "pointer",
    display : "inline-block",
    marginLeft : "260px",
    padding : "20px",
    borderRadius : "5px",
    backgroundColor : "#c5c7c9"
}
const ThemeToggler = () => {
    const[themeMode, setThemeMode] = useContext(ThemeContext);
    return(
        <div style = {themeTogglerStyle} onClick = {() => {setThemeMode(themeMode === "light"? "dark": "light")}}>
            <span title = "switch theme">
                {themeMode === "light" ? "🌙" : "☀️"}
            </span>
        </div>
    );
}

export default ThemeToggler;