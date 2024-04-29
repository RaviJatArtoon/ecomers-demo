import { lazy } from "react";
import { ROLE } from "./RollBasRoute";

const HomePage = lazy(() => import("../pages/HomePage"));
const Dashbord = lazy(() => import("../pages/Dashbord"));
const EditPage = lazy(() => import("../pages/EditPage"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Login = lazy(() => import("../pages/Login"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const CardPage = lazy(() => import("../pages/CardPage"));
const Orders = lazy(() => import("../pages/Orders"));
const Order = lazy(() => import("../pages/Order"));
const Recipes = lazy(() => import("../pages/Recipes"));
const FormPage = lazy(() => import("../pages/FormPage"));
const DetailsPage = lazy(() => import("../pages/DetailsPage"));
const RecipesDetails = lazy(() => import("../pages/RecipesDetails"));

const UnAuthorized = lazy(() => import("../pages/UnAuthorized"));

const { ADMIN, USERS } = ROLE;

export const privateRouteList = [
  {
    title: "Dashbord",
    path: "/dashbord",
    element: Dashbord,
    allowRoll: [ADMIN,USERS],
  },
  {
    title: "products",
    path: "/products",
    element: LandingPage,
    allowRoll: [ADMIN,USERS],
  },
  {
    title: "cart",
    path: "/cart",
    element: CardPage,
    allowRoll: [ADMIN,USERS],
  },
  {
    title: "orders",
    path: "/orders",
    element: Orders,
    allowRoll: [ADMIN,USERS],
  },
  {
    title: "order",
    path: "/order/orders/:id",
    element: Order,
    allowRoll: [ADMIN,USERS],
  },
  {
    title: "recipes",
    path: "/recipes",
    element: Recipes,
    allowRoll: [ADMIN,USERS],
  },
  {
    title: "addproduct",
    path: "/products/product",
    element: FormPage,
    allowRoll: [ADMIN],
  },
  {
    title: "detailsPage",
    path: "/products/details/:id",
    element: DetailsPage,
    allowRoll: [ADMIN,USERS],
  },
  {
    title: "reasipesDetails",
    path: "/recipes/details/:id",
    element: RecipesDetails,
    allowRoll: [ADMIN,USERS],
  },
  {
    title: "EditPage",
    path: "/edit",
    element: EditPage,
    allowRoll: [ADMIN]
  },
  // {
  //   title: "Home",
  //   path: "/",
  //   element: HomePage,
  //   allowRoll: [ADMIN,USERS],
  // },
  {
    title: "unauthorized",
    path: "/unauthorized",
    element: UnAuthorized,
    allowRoll: [ADMIN,USERS],
  },
];

export const publicRouteList = [
  {
    title: "Sign Up",
    path: "/signup",
    element: SignUp,
   
  },
  {
    title: "Login",
    path: "/login",
    element: Login,
  
  },
  {
    title: "Home",
    path: "/",
    element: HomePage,
  },
];
