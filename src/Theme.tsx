import { useState } from 'react';
import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";


function Theme () {
    const [theme, setTheme] = useState<string | null>(localStorage.getItem("theme"));

    const themeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if( theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setTheme("light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        }
    }

    return (
        <button className="absolute bottom-10 right-10" onClick={themeHandler}>
            {theme === "dark" ? <MdOutlineNightlight size={30}/> : <MdOutlineWbSunny size={30} />}
            </button>
    )
}

export default Theme;