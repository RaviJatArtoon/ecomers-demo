import React from 'react';
import { RouterProvider, createBrowserRouter, BrowserRouter as Router, Routes, Route, createRoutesFromElements } from 'react-router-dom';
import { publicRouteList, privateRouteList } from './data';
import PublicRouter from './PublicRoute';
import PrivateRouter from './PrivateRoute';
import { ROLE } from './RollBasRoute';
import UnAuthorized from '../pages/UnAuthorized';




const RoutesComponent = () => {
    const render = () => {
        return (
            <>
                {/* Public Route List */}
                {publicRouteList.map(({ title, path, element: Element, allowRoll }) => (
                    <Route key={title} element={<PublicRouter allowRoll={allowRoll} title={title} />}>
                        <Route path={path} element={<Element />} />
                    </Route>
                ))}

                {/* Private Route List */}
                {privateRouteList.map(({ title, path, element: Element, allowRoll }) => (
                    <Route key={title} element={<PrivateRouter allowRoll={allowRoll} title={title} />}>
                        <Route path={path} element={<Element />} />
                    </Route>
                ))}

                <Route path={'/*'} element={<UnAuthorized />} />
            </>
        );
    };
    const router = createBrowserRouter(createRoutesFromElements(render()));

    return <RouterProvider router={router} />

};

export default RoutesComponent;
