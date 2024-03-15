import { useEffect, useState } from "react"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import OurRecipes from "./Components/OurRecipes/OurRecipes"
import Recipes from "./Components/Recipes/Recipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(()=>{
    const loadData = async() => {
      const res = await fetch('./Data.json');
      const data = await res.json();
      setRecipes(data);
    }
    loadData();
  },[])
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <OurRecipes></OurRecipes>
      <Recipes recipes={recipes}></Recipes>
    </>
  )
}

export default App
