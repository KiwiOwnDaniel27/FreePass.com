import React, { useState } from "react";


const DarkMode = () => {
  
  const [theme, setTheme] = React.useState (
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  
  React.useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  },[theme])



  return (
    <div className="relative -ml-10 -mt-13">
        <img src="./assets/moodluz.webp"  alt="" 
        className={`w-25 cursor-pointer drop-shadow-[3px_3px_3px_black] transition-all
        duration-300 absolute z-10 ${theme == "dark" ? "opacity-0" : "opacity-100"

        }`}
        onClick={() => setTheme(theme == "light" ? "dark" : "light")}/>

      <img 
      src="./assets/mooddark.webp" 
      alt=""
      className={`w-26 cursor-pointer drop-shadow-[3px_3px_3px_black] transition-all
      duration-300 absolute ${theme == "dark" ? "opacity-100" : "opacity-0"}`}
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      />

    </div>
  )
}

export default DarkMode;