import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setRecipes, setRecipesMeal, setRecipesTag } from '../redux/Action';
import Pagination from '../component/CustomPagination';
import CustomPagination from '../component/CustomPagination';
import { Spin } from 'antd';


const Recipes = () => {
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const { recipes, recipesTag, mealType } = useSelector((state) => state.todos);
  // console.log(mealType,'hhhhhhhhhhhhh')
  let recipesAPI = 'https://dummyjson.com/recipes'
  let recipesMeal = 'https://dummyjson.com/recipes/meal-type/snack'

  const fetchRecipes = async (URL = '') => {
    try {
      const response = await fetch(`${recipesAPI}${URL}`.trim());
      const data = await response.json();
      dispatch(setRecipes(data?.recipes))
      setLoader(true)

    } catch (error) {
      console.log('There was an error', error);
    }
  }

  const fetchTag = async () => {
    try {
      const response = await fetch(`${recipesAPI}/tags`);
      const data = await response.json();
      // console.log(data,'hhhhhhhhhhhhh')
      dispatch(setRecipesTag(data))
      setLoader(true)
    } catch (error) {
      console.log('There was an error', error);
    }
  }

  const fetchMeal = async () => {
    try {
      const response = await fetch(recipesMeal);
      const data = await response.json();
      // console.log(data,'hhhhhhhhhhhhh')
      dispatch(setRecipesMeal(data))
      setLoader(true)
    } catch (error) {
      console.log('There was an error', error);
    }
  }

  useEffect(() => {
    fetchRecipes();
    fetchTag();
    fetchMeal();
  }, [])



  const handleSelectTag = (event) => {
    // console.log(event.target.value)
    if (event.target.value === 'all') {
      fetchRecipes();
      setLoader(true)
    } else {
      fetchRecipes(`/tag/${event.target.value}`)
      setLoader(true)
    }
  }
  const handleSelectMeal = (event) => {
    // console.log(event.target.value)
    if (event.target.value === 'all') {
      fetchRecipes();
      setLoader(true)
    } else {
      fetchRecipes(`/meal-type/${event.target.value}`)
      setLoader(true)
    }
  }


  // const newopstion = recipes?.map(({ mealType }) => { return mealType })
  // const mealTypes = recipes.map(({ mealType }) => mealType).flat();
    const mealTypes = Array.from(new Set(recipes.map(({mealType}) => mealType).flat()));

  // console.log(mealTypes, 'mmmmmmmmmmmm')
  return (
    <div>
      <div className='LandingPage recipesPage'>
        <div className='container'>
          <div className='d_flex_center selectMenu'>
            <div className='drop_down'>
              {loader ?
                <select onChange={handleSelectTag}>
                  <option value="all">All</option>
                  {recipesTag.map((tags) => (
                    <option value={tags}>{tags}</option>
                  ))}
                </select>
                :
                <div className='loder'>
                  <Spin />
                </div>}
            </div>


            <div className='drop_down'>
              <select onChange={handleSelectMeal}>
                <option value="all">All</option>
               {mealTypes.map((mealType) => (
                  <option key={mealType}  value={mealType}>{mealType}</option>
               ))}
              </select>
            </div>
          </div>

          {loader ?
            <CustomPagination recipes={recipes} />
            : <div className='loder'>
              <Spin />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Recipes




// Step : 1
// import React, { useState } from 'react';
// import { Button } from 'antd';

// const Pagination = ({ recipes }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 5;
//   const firstIndex = (currentPage - 1) * recordsPerPage;
//   const lastIndex = firstIndex + recordsPerPage;

//   const displayRecipes = recipes.slice(firstIndex, lastIndex);
//   const totalPages = Math.ceil(recipes.length / recordsPerPage);

//   const handlePrev = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   return (


//     <div className='paginationPage'>
//       <div className='pages'>
//         <div className="AllProduct allrecipes">
//           {displayRecipes.map((recipe, index) => (
//             <div className="productDetails cart_of_recipe" key={index}>
//               <div className='recipesPic'><img src={recipe.image} alt="recipespic" /></div>
//               <h2>{recipe.name}</h2>
//               <h4>{recipe.ingredients}</h4>
//               <h2>prepTimeMinutes: {recipe.prepTimeMinutes}</h2>
//               <h2>cookTimeMinutes: {recipe.cookTimeMinutes}</h2>
//               <h2>servings: {recipe.servings}</h2>
//               <h2>difficulty: {recipe.difficulty}</h2>
//               <h2>cuisine: {recipe.cuisine}</h2>
//               <h2>caloriesPerServing: {recipe.caloriesPerServing}</h2>
//               <h2>tags: {recipe.tags}</h2>
//               <h2>rating: {recipe.rating}</h2>
//               <h2>reviewCount: {recipe.reviewCount}</h2>
//               <h2>mealType: {recipe.mealType}</h2>
//             </div>
//           ))}
//         </div>


//         <ul className='d_flex_center'>
//           <li>
//             <Button type='primary' onClick={handlePrev} disabled={currentPage === 1}>Prev</Button>
//           </li>
//           <li>
//             <p>Page {currentPage} of {totalPages}</p>
//           </li>
//           <li>
//             <Button type='primary' onClick={handleNext} disabled={currentPage === totalPages}>Next</Button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Pagination;



// Step:2
// import React, { useState } from 'react';
// import { Button } from 'antd';
// import arrow from '../assest/images/double_left_arrow.svg';
// import Singlearrow from '../assest/images/single_arrow.svg';

// const Pagination = ({ recipes }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 5;
//   const firstIndex = (currentPage - 1) * recordsPerPage;
//   const lastIndex = firstIndex + recordsPerPage;

//   const displayRecipes = recipes.slice(firstIndex, lastIndex);
//   const totalPages = Math.ceil(recipes.length / recordsPerPage);

//   const handlePrev = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleFirstPage = () => {
//     setCurrentPage(1);
//   };

//   const handleLastPage = () => {
//     setCurrentPage(totalPages);
//   };

//   // Generate an array of page numbers
//   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

//   return (
//     <div className='paginationPage'>
//       <div className='pages'>
//         <div className="AllProduct allrecipes">
//           {displayRecipes.map((recipe, index) => (
//             <div className="productDetails cart_of_recipe" key={index}>
//               <div className='recipesPic'><img src={recipe.image} alt="recipespic" /></div>
//               <h2>{recipe.name}</h2>
//               <h4>{recipe.ingredients}</h4>
//               <h2>prepTimeMinutes: {recipe.prepTimeMinutes}</h2>
//               <h2>cookTimeMinutes: {recipe.cookTimeMinutes}</h2>
//               <h2>servings: {recipe.servings}</h2>
//               <h2>difficulty: {recipe.difficulty}</h2>
//               <h2>cuisine: {recipe.cuisine}</h2>
//               <h2>caloriesPerServing: {recipe.caloriesPerServing}</h2>
//               <h2>tags: {recipe.tags}</h2>
//               <h2>rating: {recipe.rating}</h2>
//               <h2>reviewCount: {recipe.reviewCount}</h2>
//               <h2>mealType: {recipe.mealType}</h2>
//             </div>
//           ))}
//         </div>

//         <ul className='d_flex_center'>
//           <li>
//             <Button type='primary left' onClick={handleFirstPage} disabled={currentPage === 1}><img src={arrow}  alt='arrow'/></Button>
//           </li>
//           <li>
//             <Button type='primary' onClick={handlePrev} disabled={currentPage === 1}><img src={Singlearrow}  alt='arrow'/></Button>
//           </li>
//           {pageNumbers.map((pageNumber) => (
//             <li key={pageNumber}>
//               <Button
//                 type='primary'
//                 onClick={() => handlePageClick(pageNumber)}
//                 disabled={pageNumber === currentPage}
//               >
//                 {pageNumber}
//               </Button>
//             </li>
//           ))}
//           <li>
//             <Button type='primary right' onClick={handleNext} disabled={currentPage === totalPages}> <img src={Singlearrow}  alt='arrow'/> </Button>
//           </li>
//           <li>
//             <Button type='primary right' onClick={handleLastPage} disabled={currentPage === totalPages}><img src={arrow}  alt='arrow'/></Button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
