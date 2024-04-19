import React from 'react';
import {
    RouterProvider, createBrowserRouter,
    BrowserRouter as Router, Routes,
    Route, createRoutesFromElements
} from 'react-router-dom';

import { publicRouteList, privateRouteList } from './data';

import PublicRouter from './PublicRoute';
import PrivateRouter from './PrivateRoute';

import Login from '../pages/Login';
import Dashbord from '../pages/Dashbord';


const RoutesComponent = () => {
    const render = () => {
        return (
            <>
                {/* Public Route List */}
                {publicRouteList.map(({ title, path, element: Element }) => (
                    <Route key={title} element={<PublicRouter title={title} />}>
                        <Route path={path} element={<Element />} />
                    </Route>
                ))}

                {/* Private Route List */}
                {privateRouteList.map(({ title, path, element: Element }) => (
                    <Route key={title} element={<PrivateRouter title={title} />}>
                        <Route path={path} element={<Element />} />
                    </Route>
                ))}

            </>
        );
    };
    const router = createBrowserRouter(createRoutesFromElements(render()));

    return <RouterProvider router={router} />

};

export default RoutesComponent;
