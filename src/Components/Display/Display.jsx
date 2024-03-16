function Display({ btnRecipes, handlePreparing, deleteItems, cooking }) {
  console.log(cooking);
  return (
    <div className=" m-3 md:m-6">
      <div>
        <div>
          <h3 className="text-2xl font-semibold text-center">
            Want to cook: {btnRecipes.length}
          </h3>
          <hr className="my-4 mx-6" />
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
                <tr key={index} className="border border-gray-500 list-decimal">
                  <td className="border-r pr-2">{item.recipe_name}</td>
                  <td className="border-r pr-2">{item.preparing_time}</td>
                  <td>{item.calories}</td>
                  <td>
                    <button
                      onClick={() => handlePreparing(item.recipe_id)}
                      className="px-3 py-2 bg-[#0BE58A] hover:bg-green-500 active:bg-green-700 rounded-full my-2 text-xs font-semibold text-[#150B2B]"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-6 md:mt-10">
        <div>
          <h3 className="text-2xl font-semibold text-center">
            Currently cooking: {deleteItems.length}
          </h3>
          <hr className="my-4 mx-6" />
        </div>
        <table className="table-auto w-full text-center p-2">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {deleteItems?.map((pd, index) => {
              return (
                <tr key={index} className="border border-gray-500">
                  <td className="border-r pr-2">{pd[0]?.recipe_name}</td>
                  <td className="border-r pr-2">{pd[0]?.preparing_time}</td>
                  <td>{pd[0]?.calories}</td>
                </tr>
              );
            })}
            <tr>
              <td>
                Total time:
                {deleteItems.reduce((a, c) => a + c[0].preparing_time, 0)} min
              </td>
              <td>
                Total Calories:{' '}
                {deleteItems.reduce((a, c) => a + c[0].calories, 0)} calories
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Display;
