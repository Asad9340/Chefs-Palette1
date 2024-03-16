import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import OurRecipes from './Components/OurRecipes/OurRecipes';
import Recipes from './Components/Recipes/Recipes';
import Display from './Components/Display/Display';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [btnRecipes, setBtnRecipes] = useState([]);
  const [deleteItems, setDeleteItems] = useState([]);
  const handleCook = recipe => {
    const isExist = btnRecipes.find(
      item => item.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setBtnRecipes([...btnRecipes, recipe]);
      toast.success('Item added successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      toast.warn('Items Already Exist', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };
  const handlePreparing = id => {
    handlePendiing(id);
    handleResolved(id);
  };
  const handlePendiing = id => {
    const newItems = btnRecipes?.filter(item => item.recipe_id !== id);
    setBtnRecipes(newItems);
    toast.info('Item is now under cooking', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };
  const handleResolved = id => {
    const newDeletedItems = btnRecipes.filter(item => item.recipe_id === id);
    const newDeleteItems = [...deleteItems, newDeletedItems];
    setDeleteItems(newDeleteItems);
  };
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('./Data.json');
      const data = await res.json();
      setRecipes(data);
    };
    loadData();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <OurRecipes></OurRecipes>
      <div className="flex flex-col md:grid gap-4 grid-cols-12 max-w-6xl mx-auto">
        <div className="col-span-8">
          <Recipes recipes={recipes} handleCook={handleCook}></Recipes>
        </div>
        <div className="col-span-4">
          <Display
            btnRecipes={btnRecipes}
            handlePreparing={handlePreparing}
            deleteItems={deleteItems}
          ></Display>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
