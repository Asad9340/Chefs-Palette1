function Recipe({ recipe }) {
  const { recipe_image, recipe_name, short_description } = recipe;
  console.log(recipe)
  return (
    <div className="w-[300px] rounded-lg border p-2">
      <img
        src={recipe_image}
        alt="Laptop"
        className="w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {recipe_name}
        </h1>
        <p className="mt-3 text-sm text-gray-600">{short_description}</p>
        <hr className="my-3"/>
        <div className="mt-4">
          <div></div>
          <div></div>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
}

export default Recipe