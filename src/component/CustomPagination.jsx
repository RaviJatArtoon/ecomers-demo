
import React, { useState } from 'react';
import { Button, Spin } from 'antd';
import arrow from '../assest/images/double_left_arrow.svg';
import Singlearrow from '../assest/images/single_arrow.svg';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const Pagination = ({ recipes }) => {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = firstIndex + recordsPerPage;

  const displayRecipes = recipes.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(recipes.length / recordsPerPage);


  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    setLoader(true)
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    setLoader(true)
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);

  };

  const handleFirstPage = () => {
    setCurrentPage(1);
    setLoader(true)
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
    setLoader(true)
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleDetails = (recipe) => {
    // console.log(recipe)
    navigate(`/recipes/details/${recipe.id}`)
  }



  return (
    <div className='paginationPage'>
      <div className='pages'>
        {loader ? <div className='loder'>
          <Spin />
        </div> : 
        <div className="AllProduct allrecipes">
          {displayRecipes.map((recipe, index) => (
            <div className="productDetails cart_of_recipe" key={index} onClick={() => handleDetails(recipe)}>
              <div className='recipesPic'><img src={recipe.image} alt="recipespic" /></div>
              <h2>{recipe.name}</h2>
              <h4>{recipe.ingredients}</h4>
              <h2>prepTimeMinutes: {recipe.prepTimeMinutes}</h2>
              <h2>cookTimeMinutes: {recipe.cookTimeMinutes}</h2>
              <h2>servings: {recipe.servings}</h2>
              <h2>difficulty: {recipe.difficulty}</h2>
              <h2>cuisine: {recipe.cuisine}</h2>
              <h2>caloriesPerServing: {recipe.caloriesPerServing}</h2>
              <h2>tags: {recipe.tags}</h2>
              <h2>rating: {recipe.rating}</h2>
              <h2>reviewCount: {recipe.reviewCount}</h2>
              <h2>mealType: {recipe.mealType}</h2>
            </div>
          ))}
        </div>

        }

        <ul className='d_flex_center'>
          <li>
            <Button type='primary left' onClick={handleFirstPage} disabled={currentPage === 1}><img src={arrow} alt='arrow' /></Button>
          </li>
          <li>
            <Button type='primary' onClick={handlePrev} disabled={currentPage === 1}><img src={Singlearrow} alt='arrow' /></Button>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <Button type='primary' onClick={() => handlePageClick(pageNumber)} disabled={pageNumber === currentPage} >{pageNumber} </Button>
            </li>
          ))}
          <li>
            <Button type='primary right' onClick={handleNext} disabled={currentPage === totalPages}> <img src={Singlearrow} alt='arrow' /> </Button>
          </li>
          <li>
            <Button type='primary right' onClick={handleLastPage} disabled={currentPage === totalPages}><img src={arrow} alt='arrow' /></Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
