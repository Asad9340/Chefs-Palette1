function Display({ btnRecipes, handlePreparing, deleteItems }) {
  return (
    <div>
      <div>
        <div>
          <h3 className="text-2xl font-semibold text-center">
            Want to cook: {btnRecipes.length}
          </h3>
          <hr className="my-4 mx-6" />
        </div>
        <table className="table-auto w-full text-center p-2">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {btnRecipes?.map((item, index) => {
              return (
                <tr key={index} className=" text-sm">
                  <th className=" pr-2">{index + 1}</th>
                  <td className=" pr-2">{item.recipe_name}</td>
                  <td className=" pr-2">{item.preparing_time}</td>
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
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {deleteItems?.map((pd, index) => {
              return (
                <tr key={index} className=" border-gray-500 text-sm">
                  <td className="pr-2">{pd[0]?.recipe_name}</td>
                  <td className=" pr-2">{pd[0]?.preparing_time}</td>
                  <td className="pr-2">{pd[0]?.calories}</td>
                </tr>
              );
            })}
            <tr className="bg-gray-200">
              <td>
                Total time:
                {deleteItems.reduce((a, c) => a + c[0].preparing_time, 0)} min
              </td>
              <td colSpan={2}>
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
