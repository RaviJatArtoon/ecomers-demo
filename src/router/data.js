import { lazy } from "react";
// import RecipesDetails from "../pages/recipesDetails";

const Dashbord = lazy(() => import("../pages/Dashbord"));
const EditPage = lazy(() => import("../pages/EditPage"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Login = lazy(() => import("../pages/Login"));

export const privateRouteList = [
  {
    title: "Dashbord",
    path: "/",
    element: Dashbord,
  },
  {
    title: "EditPage",
    path: "/edit",
    element: EditPage,
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
];
