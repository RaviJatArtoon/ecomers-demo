import React from 'react';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements, } from "react-router-dom";

import Layout from "../layout/Layout";
import CardPage from "../pages/CardPage";
import LandingPage from "../pages/LandingPage";
import DetailsPage from "../pages/DetailsPage";
import EditPage from "../pages/EditPage";
import FormPage from "../pages/FormPage";
import Orders from "../pages/Orders";
import Order from "../pages/Order";
import Recipes from "../pages/Recipes";
import RecipesDetails from "../pages/RecipesDetails";
import Login from "../pages/Login";
import Dashbord from '../pages/Dashbord';
import UnAuthorized from '../pages/UnAuthorized';

const CommanRoute = () => {
    const render = () => {
        return (
            <>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/dashbord"} element={<Dashbord />} />
                    <Route path={"/login"} element={<Login />} />
                    <Route path={"/products"} element={<LandingPage />} />
                    <Route path={"/cart"} element={<CardPage />} />
                    <Route path={`/products/details/:id`} element={<DetailsPage />} />
                    <Route path={`/products/product/:id`} element={<EditPage />} />
                    <Route path={"/products/product"} element={<FormPage />} />
                    <Route path={`/orders`} element={<Orders />} />
                    <Route path={`/order/orders/:id`} element={<Order />} />
                    <Route path={`/recipes`} element={<Recipes />} />
                    <Route path={`/recipes/details/:id`} element={<RecipesDetails />} />
                    <Route path={`/unauthorized`} element={<UnAuthorized />} />
                </Route>
            </>
        );
    };
    const router = createBrowserRouter(createRoutesFromElements(render()));
    return <RouterProvider router={router} />;
}

export default CommanRoute
