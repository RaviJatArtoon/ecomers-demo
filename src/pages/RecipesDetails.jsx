import { Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipesDetails = () => {
  const { id } = useParams();
  const [singleRecipe, setSingleRecipe] = useState({})
  const [loader, setLoader] = useState(false);

  const recipesDetails = `https://dummyjson.com/recipes/${id}`

  const fatchSingleRecipe = async () => {
    try {
      const res = await fetch(recipesDetails);
      const data = await res.json();
      setSingleRecipe(data);
      setLoader(true)
    } catch (error) {
      console.error(error)
    }
  };


  useEffect(() => {
    fatchSingleRecipe()
  }, [])


  return (
    <div className='LandingPage paginationPage'>
      <div className='pages'>
        <div className="AllProduct allrecipes">
         {loader ?
          <div className="productDetails cart_of_recipe"  >
            <div className='recipesPic'><img src={singleRecipe.image} alt="singleRecipespic" /></div>
            <h2>{singleRecipe.name}</h2>
            <h4>{singleRecipe.ingredients}</h4>
            <h2>prepTimeMinutes: {singleRecipe.prepTimeMinutes}</h2>
            <h2>cookTimeMinutes: {singleRecipe.cookTimeMinutes}</h2>
            <h2>servings: {singleRecipe.servings}</h2>
            <h2>difficulty: {singleRecipe.difficulty}</h2>
            <h2>cuisine: {singleRecipe.cuisine}</h2>
            <h2>caloriesPerServing: {singleRecipe.caloriesPerServing}</h2>
            <h2>tags: {singleRecipe.tags}</h2>
            <h2>rating: {singleRecipe.rating}</h2>
            <h2>reviewCount: {singleRecipe.reviewCount}</h2>
            <h2>mealType: {singleRecipe.mealType}</h2>
          </div>
          :
          <div className='loder'>
            <Spin />
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default RecipesDetails
