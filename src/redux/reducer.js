import { ADD_CART, CountCart, DELETE_PRO, SET_PRODUCTS, SET_RECIPES, SET_RECIPES_MEAL, SET_RECIPES_TAG } from "./Action";

// let API = "https://dummyjson.com/products";

const initialState = {
  counter: 0,
  products: [],
  recipes: [],
  recipesTag: [],
  mealType: [],
  CartCount: 0,
};

const cartData = {
  carts: JSON.parse(localStorage.getItem("carts")) || [],
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      // console.log(action,'log case');
      return {
        ...state,
        products: action.products,
      };
    case DELETE_PRO:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.id),
      };

    case CountCart:
      // console.log("object", action.payload);
      return {
        ...state,
        CartCount: action.payload.length ,
      };
      case SET_RECIPES:
        // console.log(action,'log case');
        return {
          ...state,
          recipes: action.recipes,
        };
      case SET_RECIPES_TAG:
        console.log(action,'log case');
        return {
          ...state,
          recipesTag: action.recipesTag,
        };
      case SET_RECIPES_MEAL:
        console.log(action,'log case');
        return {
          ...state,
          mealType: action.mealType,
        };
    default:
      return state;
  }
};

// export const cartreducer = (state = cartData, action) => {
//   console.log(state, "lllllllllllllllllllll");
//   switch (action.type) {
//     case ADD_CART:
//       break;

//     default:
//       break;
//   }
// };

export default todos;
