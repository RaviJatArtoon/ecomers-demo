import { lazy } from "react";





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

export const privateRouteList = [
  {
    title: "Dashbord",
    path: "/dashbord",
    element: Dashbord,
  },
  {
    title: "products",
    path: "/products",
    element: LandingPage,
  },
  {
    title: "cart",
    path: "/cart",
    element: CardPage,
  },
  {
    title: "orders",
    path: "/orders",
    element: Orders,
  },
  {
    title: "order",
    path: "/order/orders/:id",
    element: Order,
  },
  {
    title: "recipes",
    path: "/recipes",
    element: Recipes,
  },
  {
    title: "addproduct",
    path: "/products/product",
    element: FormPage,
  },
  {
    title: "detailsPage",
    path: "/products/details/:id",
    element: DetailsPage,
  },
  {
    title: "reasipesDetails",
    path: "/recipes/details/:id",
    element: RecipesDetails,
  },
  {
    title: "EditPage",
    path: "/edit",
    element: EditPage,
  },
  {
    title: "Home",
    path: "/",
    element: HomePage,
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
