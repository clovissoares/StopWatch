const theme = window.localStorage.getItem("theme");

if (theme === "dark") {
    document.documentElement.classList.add("dark");
}