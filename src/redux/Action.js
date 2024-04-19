export const ADD_CART = "ADD_CART";
export const ADD_PRO = "ADD_PRO";
export const EDIT_PRO = "EDIT_PRO";
export const DELETE_PRO = "DELETE_PRO";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_RECIPES = "SET_RECIPES";
export const SET_RECIPES_TAG = "SET_RECIPES_TAG";
export const SET_RECIPES_MEAL = "SET_RECIPES_MEAL";
export const CountCart = "CountCart";

export const Delete = (id) => {
  return {
    type: DELETE_PRO,
    payload: id,
  };
};

export const Editpro = (brand,category,description,discountPercentage,price,rating,stock,id,title) => {
  return {
    type: EDIT_PRO,
    brand,
    category,
    description,
    discountPercentage,
    price,
    rating,
    stock,
    id,
    title,
  };
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};
export const setRecipes = (recipes) => {
  // console.log(recipes,'ggggggggggggggg')
  return {
    type: SET_RECIPES,
    recipes,
  };
};

export const setRecipesTag = (recipesTag) => {
  // console.log(recipes,'ggggggggggggggg')
  return {
    type: SET_RECIPES_TAG,
    recipesTag,
  };
};

export const setRecipesMeal = (mealType) => {
  // console.log(recipes,'ggggggggggggggg')
  return {
    type: SET_RECIPES_MEAL,
    mealType,
  };
};

export const AddToCart = (item,id) => {
  return {
      type: "ADD_CART",
      payload: item,
      id
  }
}
export const notificatio = (CountCart) => {
  return {
      type: "CountCart",
      payload: CountCart
  }
}