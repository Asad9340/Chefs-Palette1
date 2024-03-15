import Recipe from "../Recipe/Recipe";

function Recipes({ recipes }) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {
        recipes.map((recipe,index)=><Recipe key={index} recipe={recipe}></Recipe>)
      }
    </div>
  )
}

export default Recipes