"use client";
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { use, useEffect, useState } from "react";

const defaultTheme = () => {
  if( typeof window !== "undefined"){

    const userPreference = window &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
    
    const userSaved = window && localStorage.getItem("theme");
    console.log("userPreference",userPreference,userSaved);
   
    return userSaved || userPreference;
  }

  return "dark";
};

const refreshTheme = () => {
  if (typeof window !== "undefined") {
    if (defaultTheme() === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
};

const ModeToggle = () => {
  let [theme, setTheme] = useState(defaultTheme());
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("refreshing theme",defaultTheme());
      refreshTheme();
    }
  }, [theme]);

  const handleChange = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  return (
    <Button onClick={handleChange} variant={"ghost"} size={"icon"}>
      {theme === "light" ? (
        <Sun className="w-5 h-5 group-hover:-rotate-45 transition-all  rotate-3" />
      ) : (
        <Moon className="w-5 h-5 group-hover:-rotate-45 transition-all rotate-3" />
      )}
    </Button>
  );
};

export default ModeToggle;
