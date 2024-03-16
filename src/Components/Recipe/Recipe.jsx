// import { MdAccessTimeFilled } from 'react-icons/md';
// import { BsFire } from 'react-icons/bs';

// function Recipe({ recipe, handleCook }) {
//   const {
//     recipe_image,
//     recipe_name,
//     short_description,
//     preparing_time,
//     calories,
//     ingredients,
//   } = recipe;
//   return (
//     <div className="rounded-lg border p-2">
//       <img
//         src={recipe_image}
//         alt="Laptop"
//         className=" h-48 w-full rounded-md object-cover"
//       />
//       <div className="p-4">
//         <h1 className="inline-flex items-center text-lg font-semibold">
//           {recipe_name}
//         </h1>
//         <p className="mt-3 text-sm text-gray-600">{short_description}</p>
//         <hr className="my-3" />
//         <div>
//           <h3 className="text-lg font-medium">
//             Ingredients: {ingredients.length}
//           </h3>
//           {ingredients.map((item, index) =>
//             index < 3 ? (
//               <li className="text-[#878787] text-base" key={index}>
//                 {item}
//               </li>
//             ) : null
//           )}
//         </div>
//         <hr className="my-3" />
//         <div className="mt-4 flex gap-3 justify-between">
//           <div className="flex gap-2 items-center">
//             <MdAccessTimeFilled />
//             <p>{preparing_time} min</p>
//           </div>
//           <div className="flex gap-2 items-center">
//             <BsFire />
//             <p>{calories} calories</p>
//           </div>
//         </div>
//         <button
//           onClick={() => handleCook(recipe)}
//           type="button"
//           className="bg-[#0BE58A] px-4 py-2 rounded-md mt-3 text-base font-semibold hover:bg-[#40906f] hover:text-black active:bg-[#41c78f]"
//         >
//           Want to Cook
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Recipe;
