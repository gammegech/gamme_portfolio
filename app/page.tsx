"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import About from "./components/About"
import Services from "./components/Services"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect, useState } from "react";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add("dark");
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = ""; 
    }
  }, [isDarkMode])
  return (
    <>
      <Navbar />
      <Header/>
      <About/>
      <Services/>
      <Works/>
      <Contact/>
      <Footer/>
    </>
  );
}
