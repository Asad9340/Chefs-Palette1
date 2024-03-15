function Display({ btnRecipes, handlePendiing }) {
  console.log(btnRecipes);
  return (
    <div className=" m-3 md:m-6">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Want to cook: {btnRecipes.length}
        </h3>
      </div>
      <table className="table-auto w-full text-center p-2">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {btnRecipes?.map((item, index) => {
            return (
              <tr key={index} className="border border-gray-500">
                <td className="border-r pr-2">{item.recipe_name}</td>
                <td className="border-r pr-2">{item.preparing_time}</td>
                <td>{item.calories}</td>
                <td>
                  <button
                    onClick={()=>handlePendiing(item)}
                    className="px-3 py-2 bg-[#0BE58A] hover:bg-green-500 active:bg-green-700 rounded-full my-2 text-xs font-semibold text-[#150B2B]"
                  >
                    Pending
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Display;
